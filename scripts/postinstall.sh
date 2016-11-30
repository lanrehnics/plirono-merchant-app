#!/bin/sh

# Installs git hook that verifies commit messages comply with the angular convention
ln -s ../../node_modules/angular-precommit/index.js .git/hooks/commit-msg