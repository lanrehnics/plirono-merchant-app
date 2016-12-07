# Change Log

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

<a name="0.2.1"></a>
## [0.2.1](http://gitlab.omnixell.com/maninak/plirono-merchant-app/compare/v0.2.0...v0.2.1) (2016-12-07)


### Bug Fixes

* **changelog:** auto-amend automated release commit with the fixed gitlab links ([c18f337](http://gitlab.omnixell.com/maninak/plirono-merchant-app/commit/c18f337))
* **changelog:** fix gitlab links to be http instead of https ([24887fd](http://gitlab.omnixell.com/maninak/plirono-merchant-app/commit/24887fd))



<a name="0.2.0"></a>
# [0.2.0](http://gitlab.omnixell.com/maninak/plirono-merchant-app/compare/v0.1.1...v0.2.0) (2016-12-06)


### Features

* **design:** app stylesheet is now themed for Plirono ([bc25584](http://gitlab.omnixell.com/maninak/plirono-merchant-app/commit/bc25584))
* **login, signup, about, sidemenu:** new pages that also support saving in browser storage ([9aed796](http://gitlab.omnixell.com/maninak/plirono-merchant-app/commit/9aed796))
* **webserver:** no loger allows cross-site requests ([131552d](http://gitlab.omnixell.com/maninak/plirono-merchant-app/commit/131552d))
* **webserver:** now serves at port 8080 and does not require super-user rights ([da88830](http://gitlab.omnixell.com/maninak/plirono-merchant-app/commit/da88830))


### Performance Improvements

* **cordova:** project is now entirely cordova-free ([725162c](http://gitlab.omnixell.com/maninak/plirono-merchant-app/commit/725162c))
* **webserver:** remove node module `body-parser` from project dependencies ([df63cd9](http://gitlab.omnixell.com/maninak/plirono-merchant-app/commit/df63cd9))
* **webserver:** remove node module `path` from project dependencies ([8acf909](http://gitlab.omnixell.com/maninak/plirono-merchant-app/commit/8acf909))



<a name="0.1.1"></a>
## [0.1.1](http://gitlab.omnixell.com/maninak/plirono-merchant-app/compare/v0.1.0...v0.1.1) (2016-11-30)


### Bug Fixes

* **changelog:** fix issues with custom release.sh script ([d7a8f17](http://gitlab.omnixell.com/maninak/plirono-merchant-app/commit/d7a8f17))



<a name="0.1.0"></a>
# 0.1.0 (2016-11-30)


### Features

* **changelog:** add automatic changelog generation with command `npm run release` ([b6bb946](http://gitlab.omnixell.com/maninak/plirono-merchant-app/commit/b6bb946))
* **changelog:** make `npm run release` customiseable and working from any current branch ([5f82c07](http://gitlab.omnixell.com/maninak/plirono-merchant-app/commit/5f82c07))
* **webserver:** add client-side file caching ([8fb4a7d](http://gitlab.omnixell.com/maninak/plirono-merchant-app/commit/8fb4a7d))
* **webserver:** add compress sent responses ([6f684dd](http://gitlab.omnixell.com/maninak/plirono-merchant-app/commit/6f684dd))
* **webserver:** allow app to fetch resources from external servers ([6b30e6d](http://gitlab.omnixell.com/maninak/plirono-merchant-app/commit/6b30e6d))
* **webserver:** implement Express.js webserver ([6b345b6](http://gitlab.omnixell.com/maninak/plirono-merchant-app/commit/6b345b6))
