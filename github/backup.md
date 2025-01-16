---
title: GitHub organizations backups
toc: false
---
W3C relies on [Rewind](https://rewind.com/) to backup the different GitHub organizations the groups depend on.

Rewind runs daily backups of all the repositories, including metadata and provides a way to restore a repository if the GitHub support is not able to help.

## Rewind App (GitHub)

To start the backup process for a GitHub organization, the user [w3cbot](https://github.com/w3cbot) **must** be [listed as one of the owners of the organization](https://knowledge.rewind.com/s/article/which-permissions-do-i-need-to-install-rewind) so it can:

- Install the [Rewind App](https://github.com/apps/rewind-app-github) to the organization
- Import the organization into Rewind
- Restore a repository when needed

After inviting w3cbot, you may request [sysreq](mailto:sysreq@w3.org) to add your organization to Rewind.
