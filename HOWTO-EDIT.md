# How to edit

Pull requests are welcome from the Community. This Guide is for you after all.

The general edition of the Guidebook is managed by [@w3c/guidebook](https://github.com/orgs/w3c/teams/guidebook) but many areas are maintained by separate individuals or teams (check out the commits history of a file to see who).

## Dealing with submodules

Avoid editing the files within a submodule, unless you want to struggle updating the submodules later. Edit those in the dedicated repositories instead.

The exact commit (e.g. revision) of each submodule is stored in the w3c/guide repository. Those needs to be updated in order to expose the latest version.

### Updating the submodules

If it's the first time you check-out the repo you need to use --init first:

```
git submodule update --init --recursive
```

After that, you can update to latest tips of remote branches:

```
git submodule update --recursive --remote
```

then commit your updates

```
git commit -a -m "[chore] submodules update"
```


