#!/bin/sh

# save any uncommited changes in the stash
git add -A
git stash

# update master and develop branches with their latest state from origin
git checkout master
git pull origin master
git checkout develop
git pull origin develop

# bring master up to date with latest develop branch
git merge master
git checkout master
git merge --no-ff develop

# TODO run tests

# 1. bump the version in package.json (based on commit history)
# 2. use conventional-changelog to update CHANGELOG.md
# 3. commit package.json (et al.) and CHANGELOG.md
# 4. tag a new release
node node_modules/standard-version/index.js