# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## [2.8.3](https://github.com/JiLiZART/bbob/compare/v2.8.2...v2.8.3) (2022-12-18)


### Bug Fixes

* remove gitHead from package.json ([2b3ffa9](https://github.com/JiLiZART/bbob/commit/2b3ffa93233decdb3f2c93e91bd93582525f9210))





## [2.8.2](https://github.com/JiLiZART/bbob/compare/v2.8.1...v2.8.2) (2022-11-28)

**Note:** Version bump only for package @bbob/preset-vue





## [2.8.1](https://github.com/JiLiZART/bbob/compare/v2.8.0...v2.8.1) (2022-05-24)

**Note:** Version bump only for package @bbob/preset-vue





# [2.8.0](https://github.com/JiLiZART/bbob/compare/v2.7.0...v2.8.0) (2021-11-28)


### Features

* update core deps ([#120](https://github.com/JiLiZART/bbob/issues/120)) ([da6709d](https://github.com/JiLiZART/bbob/commit/da6709d43799304e62d51cd03921e261308db80f))


### BREAKING CHANGES

* now we use swc.rs as main bundler and transpiler instead of babel
  - jest now uses swc
  - rollup now uses swc

* feat: benchmark now separate package with `npm start` and colored output
  - benchmark as separate package with error throw if package drops performance

* feat: all lerna packages now using scripts/pkg-task

* feat(github): publish to npm and github registry
  - when release was created this action automaticly publish packages to npm and github

* feat(github): move all from Travis CI to Github Actions
  - code analysis and tests now using github actions

* test: increase tests coverage
  - add more tests for @bbob/react, @bbob/vue2 and @bbob/parser





## [2.7.1](https://github.com/JiLiZART/bbob/compare/v2.7.0...v2.7.1) (2021-11-04)

**Note:** Version bump only for package @bbob/preset-vue





# [2.7.0](https://github.com/JiLiZART/bbob/compare/v2.5.8...v2.7.0) (2021-05-19)


### Features

* support for vue2  ([#88](https://github.com/JiLiZART/bbob/issues/88)) ([cbccbaf](https://github.com/JiLiZART/bbob/commit/cbccbaf896e675ce70273234577544b7861859f6))
