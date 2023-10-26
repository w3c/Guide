# How to edit

Pull requests are welcome from the Community. This Guide is for you after all.

The general edition of the Guidebook is managed by [@w3c/guidebook](https://github.com/orgs/w3c/teams/guidebook) but many areas are maintained by separate individuals or teams (check out the commits history of a file to see who).

### Refreshing submodules

Git tracks submodules as ordinary objects. This means, that once you added the submodule, the exact state (e.g. revision) of the submodule is stored in the parent module as well. A side-effect of the way git handles submodules is, that you cannot have a "live" submodule(where you always track the HEAD of a master branch) - a submodule is really always in a detached state.

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


