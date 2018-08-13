# Group-specific information to generate a customized /Guide page for group participants

## Step1: Generate the group mapping table

Generate `group.map` based on W3C API and /Member/Groups.

1. Generate the mapping table of gid and group name (`group.map.by_api`) using W3C API, etc.
    - I created a mapping table using `group.html` and `groupinfo.js`

1. Generate supplementary mapping table (`group.map.by_Member_Group`) from /Member/Groups (which is Member-only information) using `extract_gropus.pl`

1. Merge the mapping table from step 1 (`group.map.by_api`) and the one from step 2 (`group.map.by_Member_Group`), and then sort/uniq it to generate `group.map`

## Step2: Generate the list of all the GitHub repos which has `w3c.json` (and group field within it) using the GitHub API

1. Clone https://github.com/w3c/ghapi

1. edit conf.json

1. `npm start`

1. visit http://localhost:3000/projects and copy the results to `w3c_github.json`

## Step3: Classify repos based on their groups using the above resources

- Run `classify_repos_based_on_groups.pl` and generate `classified-results.txt`

