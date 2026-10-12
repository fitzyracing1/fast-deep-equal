# Getting started

## Install

```
npm install @fitzyracing/fast-deep-equal
# or keep the old name:
npm install fast-deep-equal@npm:@fitzyracing/fast-deep-equal
```

To replace it everywhere in your dependency tree, use npm `overrides` (see README "Using it as a drop-in replacement").

## Usage

Same as upstream. See the README "Usage" section. Entry points: `index.js` (ES5), `es6/` (Map, Set, Typed arrays) and `react.js` variants, built from `src/index.jst`.

## Develop and test

```
npm install
npm test   # build, eslint, TypeScript check, mocha with nyc coverage
```
