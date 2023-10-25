// used by getW3CData and groupInfo
const W3C_APIURL = "https://api.w3.org/";

// Fetch any JSON data and cache it
// this is low level since it doesn't cache pagination results
let JSON_CACHE = {};
function getJSON(url) {
  const ENTRY = url.toString();
  if (JSON_CACHE[ENTRY]) return JSON_CACHE[ENTRY];
  return JSON_CACHE[ENTRY] = fetch(url).then(r => r.json());
}

// Fetch any JSON data from W3C API
// Note: those queries will get cached, thanks to getData
function getW3CData(queryPath) {
  const apiURL = new URL(queryPath, W3C_APIURL);
  apiURL.searchParams.set("embed", "1"); // grab everything
  return getJSON(apiURL).then(data => {
    if (data.pages && data.pages > 1 && data.page < data.pages) {
       return getW3CData(data._links.next.href).then(nextData => {
         let key = Object.keys(data._embedded)[0];
         return data._embedded[key].concat(nextData);
       });
    }
    if (data._embedded) {
      let key = Object.keys(data._embedded)[0];
      return data._embedded[key]; // assume withLinks is already covered
    }
    return data;
  });
}
// W3C API follows a HAL model. This function creates promises to resolve the links
// going deeper into the API.
function resolveW3CLinks(set) {
  function iter(data) {
    if (data._links) {
      Object.entries(data._links).forEach(e => {
        const key = e[0];
        const href = e[1].href;
        if (key === "self") {
          // skip
        } else if (href.indexOf(W3C_APIURL) === 0) {
          data[key] = getW3CData(href);
        } else {
          data[key] = href;
        }
      });
    }
  }
  if (Array.isArray(set))
   set.map(iter);
  else
   iter(set);
  return set;
}

// the main function. Just retrieve as much as possible for a given group id
// string groupId -- the group id, e.g.  "109735"
async function groupInfo(groupId) {
  const group = await getW3CData(`/groups/${groupId}`, true).then(resolveW3CLinks);

  groupId = group.id; // sanitize the input
  group.identifier = group._links.self.href.replace('https://api.w3.org/groups/','');

  // dive deeper into specifications
  group["specifications"] = group["specifications"].then(resolveW3CLinks);
  // simplify participations a bit
  group["participations"] = group["participations"].then(data => {data.forEach(p => {
          p.title = p._links[(p.individual)? "user": "organization"].title;
    }); return data.sort(sortParticipants);});

    // Some additional useful links
  group["details"] = `https://www.w3.org/groups/${group.identifier}`;
  group["edit"] = `https://www.w3.org/admin/groups/${groupId}/show`;


  // the dashboard knows about spec milestones and a subset of GH repositories issues
  group["dashboard"] = {
    href: `https://w3c.github.io/spec-dashboard/?${groupId}`,
    repositories: getJSON(`https://w3c.github.io/spec-dashboard/pergroup/${groupId}-repo.json`).catch(e => {}),
    milestones: getJSON(`https://w3c.github.io/spec-dashboard/pergroup/${groupId}-milestones.json`).catch(e => {}),
    // publications: getData(`https://w3c.github.io/spec-dashboard/pergroup/${groupId}.json`),
  }
  // the repo validator is gathering a lot of useful data on GitHub repositories, so let's add it
  const report = "https://w3c.github.io/validate-repos/report.json";
  group["repositories"] = getJSON(report).then(data => {
      let group_report = data.groups[groupId];
      if (!group_report) return [];
      return data.groups[groupId].repos.map(repo => {
        let GH = data.repos.filter(r => (r.name === repo.name && r.owner.login === repo.fullName.split('/')[0]))[0];
        GH.fullName = repo.fullName;
        if (GH.w3c && GH.w3c["repo-type"]) {
          GH.hasRecTrack = GH.w3c["repo-type"].includes("rec-track");
          GH.hasNote = GH.w3c["repo-type"].includes("note");
        }
        return GH;
    }).sort(sortRepo);
  });

  // code below is pure convenience. We grabbed all of the data in the group object and we're
  // just decorating specification milestones, repository issues, and
  // specification statuses.
  // This will make it easier to find information when using the group object

  // associate issues with their repositories
  group["repositories"] = group["repositories"].then(data => {
    return group["dashboard"].repositories.then(dash => {
      if (!dash) return data;
      data.forEach(repo => {
        let dashrepo = repo.issues = Object.entries(dash)
          .map(r => r[1])
          .filter(r => (r.repo.name === repo.name && r.repo.owner === repo.owner.login))[0];
        if (dashrepo) repo.issues = dashrepo.issues;
      });
      return data;
    });
  });

  // associate milestones and repositories with their publications
  group["specifications"] = group["specifications"].then(specs => {
    return group["dashboard"].milestones.then(stones => {
      if (!stones) return specs;
      Object.entries(stones).forEach(s => {
        let spec = specs.filter(sp => sp.shortlink === s[0]);
        if (spec.length === 1) {
          spec[0].milestones = s[1];
        }
      })
      return specs;
    })
  });

  // annotate with latest status with specification
  group["specifications"] = group["specifications"].then(specs => {
    specs.forEach(spec => {
      spec["latest-version"].then(latest => {spec.status = latest.status});
    })
    return specs;
  });


  return group;
}

async function getGroups() {
  return getW3CData("/groups");
}

// compare functions utils

// first orgs, then individuals
function sortParticipants(a, b) {
  function criteria(v) {
    return ((!v.individual)? "A":"Z")
      + v.title;
  }
  let vA = criteria(a);
  let vB = criteria(b);
  if (vA < vB) {
    return -1;
  }
  if (vA > vB) {
    return 1;
  }

  // must be equal
  return 0;
}

// first rec track, then note, then alphabetical order
function sortRepo(a, b) {
  function criteria(v) {
    return ((v.hasRecTrack)? "A":"Z")
      + ((v.hasNote)? "A" : "Z")
      + v.name;
  }
  let vA = criteria(a);
  let vB = criteria(b);
  if (vA < vB) {
    return -1;
  }
  if (vA > vB) {
    return 1;
  }

  // must be equal
  return 0;
}
