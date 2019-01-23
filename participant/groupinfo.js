'use strict';

/**
 * Simple JavaScript library to leverage the W3C API.
 *
 * @namespace Apiary
 */
(function(window) {

  // Pseudo-constants:
  var VERSION            = '2.0.2';
  var BASE_URL           = 'https://api.w3.org/';
  var USER_PROFILE_URL   = 'https://www.w3.org/users/';
  var APIARY_ATTRIBUTE   = 'data-apiary';
  var APIARY_SELECTOR    = `[${APIARY_ATTRIBUTE}]`;
  var TYPE_GROUP_PAGE    = 1;
  var TYPE_USER_PAGE     = 2;
  var PHOTO_VALUE        = {
    large:     2,
    thumbnail: 1,
    tiny:      0
  };

  // “Global” variables (within this function):
  var apiKey;
  var type;
  /* var gid; */
  var URL;

  /************************************
   * putGrMenu
   ************************************/
  var putGrMenu = function() {

    var url;

    url = BASE_URL + 'groups';
    console.log("url:" + url);

    if (1 === document.querySelectorAll('html[data-apiary-key]').length) {
      apiKey = document.querySelectorAll('html[data-apiary-key]')[0].getAttribute('data-apiary-key');
    }
    console.log("apiKey:" + apiKey);

    /* get the list of all the groups using the W3C API */
    if (-1 === url.indexOf('?')) {
      url += '?apikey=' + apiKey + '&items=1000';
    } else {
      url += '&apikey=' + apiKey + '&items=1000';
    }

    var xhr = new XMLHttpRequest();
    xhr.open('GET', url);
    xhr.addEventListener('loadend', function(event) {
      var result = JSON.parse(xhr.response);

      var groups = result._links.groups;
      var content = '<form><select id="grlist">';
      var href;
      var id;
      for (var i = 0; i < groups.length; i++) { 
        href = groups[i].href;
        id = href.replace(/https:\/\/api.w3.org\/groups\//, "");
	  /* extract only the WGs */
          if (groups[i].title.match(/Working Group/)) {
            content += '<option value="' + id + '">' + groups[i].title + '</option>';
          }
      }
      content += '</select>';
      content += '<input type="button" value="Get Your Group\'s Info" onclick="putGrInfo(\'grlist\');" />';
      content += '</form>';

      document.getElementById("groups").innerHTML = content;
    });
    xhr.send();
  };

  /*************************************************
   * Global function to handle browser back/forward
   *************************************************/
  window.onpopstate = function(e) {
    var url = window.location.href;
    var str;
    var gid;
    var options;
    var i;

    str = url.match(/\?gid=(\d+)$/);
    gid = str[1];

    /*if (!e.state) return;*/

    /* put group information based on Group ID */
    putGrInfoBasedOnId(gid);

    /* update selection within the pulldown menu as well */
    options = document.getElementById("grlist").getElementsByTagName('option');
    for (i=0; i<options.length;i++){
      if (options[i].value == gid) {
        options[i].selected = true;
        break;
      }
    }
    /* console.log("url: " + url); */
    /* console.log("str: " + str); */
    /* console.log("gid: " + gid); */
  }

  /************************************
   * Global function to get selectd ID
   ************************************/
  window.putGrInfo = function(idname) {
    var obj = window.document.getElementById(idname);
    var gid = obj.value;

    /* console.log("gid=" +gid); */

    /* add gid to the URL display of the browser */
    history.pushState(null, null, "?gid=" + gid);

    putGrInfoBasedOnId(gid);
  };

  /***************************************************************************************
   * common function to put Group info to be called by the above onpopstate and putGrInfo
   ***************************************************************************************/
  function putGrInfoBasedOnId(gid) {
    /* console.log("gid=" +gid); */

    /* putGrName */
    var putGrName = function() {

      var url;

      url = BASE_URL + 'groups/' + gid;

      if (-1 === url.indexOf('?')) {
        url += '?apikey=' + apiKey;
      } else {
        url += '&apikey=' + apiKey;
      }

      console.log('putGrName:\n' + url);

      var xhr = new XMLHttpRequest();
      xhr.open('GET', url);
      xhr.addEventListener('loadend', function(event) {
        console.log('putGrName:\n' + xhr.responseText);

        var result = JSON.parse(xhr.response);
        console.log('putGrName:\n' + 'name:' + result.name);

        var name = result.name;
        document.getElementById("gname").innerHTML = name;
      });
      xhr.send();

    };

    /* putGrDescription */
    var putGrDescription = function() {

      var url;

      url = BASE_URL + 'groups/' + gid;

      if (-1 === url.indexOf('?')) {
        url += '?apikey=' + apiKey;
      } else {
        url += '&apikey=' + apiKey;
      }

      console.log('putGrDescription:\n' + url);

      var xhr = new XMLHttpRequest();
      xhr.open('GET', url);
      xhr.addEventListener('loadend', function(event) {
        console.log('putGrDescription:\n' + xhr.responseText);

        var result = JSON.parse(xhr.response);
        console.log('putGrDescription:\n' + 'description:' + result.description);

        var description = result.description;
        document.getElementById("gdescription").innerHTML = description;
      });
      xhr.send();

    };

    /* putGrHomepage */
    var putGrHomepage = function() {

      var url;

      url = BASE_URL + 'groups/' + gid;

      if (-1 === url.indexOf('?')) {
        url += '?apikey=' + apiKey;
      } else {
        url += '&apikey=' + apiKey;
      }
      console.log('putGrHomepage:\n' + url);

      var xhr = new XMLHttpRequest();
      xhr.open('GET', url);
      xhr.addEventListener('loadend', function(event) {
        console.log('putGrHomepage:\n' + xhr.responseText);
  
        var result = JSON.parse(xhr.response);
        console.log('putGrHomepage:\n' + 'homepage:' + result._links.homepage.href);

        url = result._links.homepage.href;
        var content = '<a href="' + url + '">' + url + '</a>';
        document.getElementById("ghomepage").innerHTML = content;
      });
      xhr.send();

    };

    /* getGrCharter */
    var getGrCharter = function() {

      var url;

      url = BASE_URL + 'groups/' + gid;

      if (-1 === url.indexOf('?')) {
        url += '?apikey=' + apiKey;
      } else {
        url += '&apikey=' + apiKey;
      }
      console.log('getGrCharter:\n' + url);

      var xhr = new XMLHttpRequest();
      xhr.open('GET', url, false);
      xhr.send();
      return xhr.responseText;

    };


    /* putGrCharter */
    var putGrCharter = function() {

      var response;
      var result;
      var url;

      response = getGrCharter();
      result = JSON.parse(response);

      url = result._links['active-charter'].href;
      console.log('putGrCharter:\n' + result.id);

      /* use 'url' updated by getGrCharter() */
      if (-1 === url.indexOf('?')) {
        url += '?apikey=' + apiKey;
      } else {
        url += '&apikey=' + apiKey;
      }
      console.log('putGrCharter:\n' + url);

      var xhr = new XMLHttpRequest();
      xhr.open('GET', url);
      xhr.addEventListener('loadend', function(event) {
        var result = JSON.parse(xhr.response);
        url = result.uri;
        console.log('putGrCharter:\n' + url);

        var content = '<a href="' + url + '">' + url + '</a>';
        document.getElementById("gcharter").innerHTML = content;
      });
      xhr.send();
    };


    /* putGrChairs */
    var putGrChairs = function() {

      var url;

      url = BASE_URL + 'groups/' + gid + '/chairs';

      if (-1 === url.indexOf('?')) {
        url += '?apikey=' + apiKey;
      } else {
        url += '&apikey=' + apiKey;
      }

      var xhr = new XMLHttpRequest();
      xhr.open('GET', url);
      xhr.addEventListener('loadend', function(event) {
        var result = JSON.parse(xhr.response);
        var chairs = result._links.chairs;
        var content = '<ul>';
        for (var i = 0; i < chairs.length; i++) { 
          content += '<li>' + chairs[i].title + '</li>';
        }
        content += '</ul>';

        document.getElementById("gchairs").innerHTML = content;
      });
      xhr.send();

    };

    /* putGrTeamcontacts */
    var putGrTeamcontacts = function() {

      var url;

      url = BASE_URL + 'groups/' + gid + '/teamcontacts';
      console.log('putGrTeamcontacts:\n' + url);
      console.log('putGrTeamcontacts:\n' + URL);

      if (-1 === url.indexOf('?')) {
        url += '?apikey=' + apiKey;
      } else {
        url += '&apikey=' + apiKey;
      }

      var xhr = new XMLHttpRequest();
      xhr.open('GET', url);
      xhr.addEventListener('loadend', function(event) {
        var result = JSON.parse(xhr.response);
        var teamcontacts = result._links['team-contacts'];
        var content = '<ul>';
        for (var i = 0; i < teamcontacts.length; i++) { 
          content += '<li>' + teamcontacts[i].title + '</li>';
        }
        content += '</ul>';

        document.getElementById("gteamcontacts").innerHTML = content;
      });
      xhr.send();

    };

    /* put Group Info */
    putGrName();
    putGrDescription();
    putGrHomepage();
    putGrCharter();
    putGrChairs();
    putGrTeamcontacts();
  };

  putGrMenu();

})(window);

