window.addEventListener('load', addGitHubIssueButton);


function addGitHubIssueButton() {
  document.querySelector('#githubissue button').addEventListener('click', createGitHubIssue);
  document.getElementById('githubissue').hidden = false;
}


function createGitHubIssue(event) {
  event.preventDefault();
  const value = document.getElementById('repository').value.trim();
  const match = value.match(/github\.com\/(.*?)\/?$/);
  const repo = match ? match[1] : value;
  if (!repo.match(/^[^\s\/]+\/[^\s\/]+$/)) {
    console.warn('Invalid repository name entered', value);
    window.alert(`Invalid repository name: "${value}".\nExpected format: "owner/repo", e.g. "w3c/foobar".`);
    return;
  }

  const title = encodeURIComponent('Seek wide review');
  const body = encodeURIComponent(generateGitHubIssueBody());
  window.open(`https://github.com/${repo}/issues/new?title=${title}&body=${body}`);
}


function generateGitHubIssueBody() {
  const dl = document.querySelector('#how-to-get-horizontal-review ~ dl');
  if (!dl) {
    console.error('Could not find right anchor in "How to get horizontal review" section');
  }

  const bullets = [...dl.querySelectorAll('dt')].map(dt => {
    const dd = dt.nextElementSibling;
    if (dd.tagName !== 'DD') {
      console.error('Could not find a DD tag after DT', dt);
      return;
    }

    const subContents = [...dd.querySelectorAll('.step')].map(el => `      - [ ] ${el.innerHTML}`);

    return `  - ${dt.textContent}\n${subContents.join('\n')}`;
  });

  return `This is a meta issue to track wide review steps for the specification.
See [How to do wide review](https://www.w3.org/guide/documentreview/#who-to-ask-for-wide-review) for details.

- [ ] the groups listed in the WG's charter, especially those who manage dependencies
- [ ] the groups jointly responsible for a particular document (if any).
- the horizontal groups:
${bullets.join('\n')}
- Other outreach (if applicable)
`;
}
