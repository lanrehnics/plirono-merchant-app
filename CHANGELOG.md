# Change Log

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

<a name="0.2.0"></a>
# [0.2.0](https://gitlab.omnixell.com/maninak/plirono-merchant-app/compare/v0.1.1...v0.2.0) (2016-12-06)


### Bug Fixes

* **webserver:** remove bugged server-side caching for now ([42ac0fb](https://gitlab.omnixell.com/maninak/plirono-merchant-app/commit/42ac0fb))


### Features

* **design:** app stylesheet is now themed for Plirono ([bc25584](https://gitlab.omnixell.com/maninak/plirono-merchant-app/commit/bc25584))
* **login, signup, about, sidemenu:** new pages supporting local storage ([9aed796](https://gitlab.omnixell.com/maninak/plirono-merchant-app/commit/9aed796))
* **webserver:** no loger allows cross-site requests ([131552d](https://gitlab.omnixell.com/maninak/plirono-merchant-app/commit/131552d))
* **webserver:** now serves at port 8080 and does not require super-user rights ([da88830](https://gitlab.omnixell.com/maninak/plirono-merchant-app/commit/da88830))


### Performance Improvements

* **cordova:** project is now entirely cordova-free ([725162c](https://gitlab.omnixell.com/maninak/plirono-merchant-app/commit/725162c))
* **webserver:** now caches in server-side mem any resently served files ([b0288bc](https://gitlab.omnixell.com/maninak/plirono-merchant-app/commit/b0288bc))
* **webserver:** remove node module `body-parser` from project dependencies ([df63cd9](https://gitlab.omnixell.com/maninak/plirono-merchant-app/commit/df63cd9))
* **webserver:** remove node module `path` from project dependencies ([8acf909](https://gitlab.omnixell.com/maninak/plirono-merchant-app/commit/8acf909))



<a name="0.1.1"></a>
## [0.1.1](https://gitlab.omnixell.com/maninak/plirono-merchant-app/compare/v0.1.0...v0.1.1) (2016-11-30)


### Bug Fixes

* **changelog:** make `npm run release` run custom release.sh script ([d7a8f17](https://gitlab.omnixell.com/maninak/plirono-merchant-app/commit/d7a8f17))



<a name="0.1.0"></a>
# 0.1.0 (2016-11-30)


### Features

* **changelog:** add automatic changelog generation with command `npm run release` ([b6bb946](https://gitlab.omnixell.com/maninak/plirono-merchant-app/commit/b6bb946))
* **changelog:** make `npm run release` customiseable and working from any current branch ([5f82c07](https://gitlab.omnixell.com/maninak/plirono-merchant-app/commit/5f82c07))
* **webserver:** add client-side file caching ([8fb4a7d](https://gitlab.omnixell.com/maninak/plirono-merchant-app/commit/8fb4a7d))
* **webserver:** add compress sent responses ([6f684dd](https://gitlab.omnixell.com/maninak/plirono-merchant-app/commit/6f684dd))
* **webserver:** allow app to fetch resources from external servers ([6b30e6d](https://gitlab.omnixell.com/maninak/plirono-merchant-app/commit/6b30e6d))
* **webserver:** implement Express.js webserver ([6b345b6](https://gitlab.omnixell.com/maninak/plirono-merchant-app/commit/6b345b6))
