#!/bin/sh

# save any uncommited changes in the stash
git add -A
git stash

# update develop and master branches with their latest state from origin
git checkout develop
git pull origin develop
git checkout master
git pull origin master

# bring master up to date with latest develop branch
git merge --no-ff --no-edit develop

# TODO run tests

# 1. bump the version in package.json (based on commit history)
# 2. use conventional-changelog to update CHANGELOG.md
# 3. commit package.json (et al.) and CHANGELOG.md
# 4. tag a new release
node_modules/standard-version/cli.js -- --standard-version

# bring develop up to date with latest master branch and its just updated version number
git checkout develop
git merge --no-ff --no-edit master
