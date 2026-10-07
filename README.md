# @fitzyracing/fast-deep-equal

> Part of **[360 Bench](https://github.com/fitzyracing1/360-bench)**, tested fixes for abandoned npm packages.

The fastest deep equal with ES6 Map, Set and Typed arrays support.

[![npm](https://img.shields.io/npm/v/@fitzyracing/fast-deep-equal.svg)](https://www.npmjs.com/package/@fitzyracing/fast-deep-equal)

> **This is a fork of [fast-deep-equal](https://github.com/epoberezkin/fast-deep-equal)
> by [Evgeny Poberezkin](https://github.com/epoberezkin)**, published as a drop-in
> replacement that fixes long-standing bugs. The upstream package has not been
> released since v3.1.3 (June 2020), and the community pull requests that fix
> these bugs have not been merged. All credit for the original library goes to
> its author and contributors; it remains available under the same MIT license.


## What's fixed in this fork

Based on upstream `fast-deep-equal@3.1.3`; the API is unchanged.

- **No more `TypeError: a.valueOf is not a function` for objects with a null
  prototype** (`Object.create(null)`), e.g. results returned by `graphql-js` or
  `Object.groupBy`. Two null-prototype objects are now compared by their keys and
  values. (A null-prototype object and a plain `{}` are still not equal, as in
  upstream, because their prototypes differ.)
  Upstream issues: [#49](https://github.com/epoberezkin/fast-deep-equal/issues/49),
  [#111](https://github.com/epoberezkin/fast-deep-equal/issues/111);
  unmerged PRs: [#134](https://github.com/epoberezkin/fast-deep-equal/pull/134),
  [#142](https://github.com/epoberezkin/fast-deep-equal/pull/142).
- **No more `TypeError: a.toString is not a function` / `a.valueOf is not a
  function` for plain data objects that have a property named `toString` or
  `valueOf`** (for example Jira changelog items: `{ fromString: 'To Do', toString: 'In Progress' }`).
  These objects are now compared key by key, in either argument order.
  Upstream issues: [#141](https://github.com/epoberezkin/fast-deep-equal/issues/141),
  [#49](https://github.com/epoberezkin/fast-deep-equal/issues/49) (comment by @moander).
- **Two invalid dates are now equal** (`equal(new Date('foo'), new Date('bar')) === true`),
  consistent with how this library already treats `NaN` and with `lodash.isEqual`.
  Upstream issue: [#138](https://github.com/epoberezkin/fast-deep-equal/issues/138).
- **TypeScript: `index.d.ts` is now a proper module declaration**, so types resolve
  under the scoped package name (upstream declared an ambient
  `declare module 'fast-deep-equal'`, which does not match a renamed package).
  Related upstream issue: [#81](https://github.com/epoberezkin/fast-deep-equal/issues/81).


## Install

```bash
npm install @fitzyracing/fast-deep-equal
```

### Using it as a drop-in replacement

`fast-deep-equal` is mostly installed as a transitive dependency (e.g. via `ajv`).
To make your whole dependency tree use this fork without changing any code,
add an override to your `package.json`:

```json
{
  "overrides": {
    "fast-deep-equal": "npm:@fitzyracing/fast-deep-equal@^3.1.4"
  }
}
```

(Yarn: use `"resolutions"`; pnpm: `"pnpm": { "overrides": { ... } }`. Tested with npm 9.9, 10 and 11;
very early npm 9 releases such as 9.2.0 reject aliased overrides with "Invalid comparator", so upgrade npm if you see that.)

Or alias it directly in your own dependencies, so `require('fast-deep-equal')` keeps working:

```bash
npm install fast-deep-equal@npm:@fitzyracing/fast-deep-equal
```


## Features

- ES5 compatible
- works in node.js (8+) and browsers (IE9+)
- checks equality of Date and RegExp objects by value.

ES6 equal (`require('@fitzyracing/fast-deep-equal/es6')`) also supports:
- Maps
- Sets
- Typed arrays


## Usage

```javascript
var equal = require('@fitzyracing/fast-deep-equal');
console.log(equal({foo: 'bar'}, {foo: 'bar'})); // true
```

To support ES6 Maps, Sets and Typed arrays equality use:

```javascript
var equal = require('@fitzyracing/fast-deep-equal/es6');
console.log(equal(Int16Array([1, 2]), Int16Array([1, 2]))); // true
```

To use with React (avoiding the traversal of React elements' _owner
property that contains circular references and is not needed when
comparing the elements - borrowed from [react-fast-compare](https://github.com/FormidableLabs/react-fast-compare)):

```javascript
var equal = require('@fitzyracing/fast-deep-equal/react');
var equal = require('@fitzyracing/fast-deep-equal/es6/react');
```


## Performance benchmark

Upstream results (fast-deep-equal 3.1.3), Node.js v12.6.0:

```
fast-deep-equal x 261,950 ops/sec ±0.52% (89 runs sampled)
fast-deep-equal/es6 x 212,991 ops/sec ±0.34% (92 runs sampled)
fast-equals x 230,957 ops/sec ±0.83% (85 runs sampled)
nano-equal x 187,995 ops/sec ±0.53% (88 runs sampled)
shallow-equal-fuzzy x 138,302 ops/sec ±0.49% (90 runs sampled)
underscore.isEqual x 74,423 ops/sec ±0.38% (89 runs sampled)
lodash.isEqual x 36,637 ops/sec ±0.72% (90 runs sampled)
deep-equal x 2,310 ops/sec ±0.37% (90 runs sampled)
deep-eql x 35,312 ops/sec ±0.67% (91 runs sampled)
ramda.equals x 12,054 ops/sec ±0.40% (91 runs sampled)
util.isDeepStrictEqual x 46,440 ops/sec ±0.43% (90 runs sampled)
assert.deepStrictEqual x 456 ops/sec ±0.71% (88 runs sampled)

The fastest is fast-deep-equal
```

To run benchmark (requires node.js 6+):

```bash
npm run benchmark
```

__Please note__: this benchmark runs against the available test cases. To choose the most performant library for your application, it is recommended to benchmark against your data and to NOT expect this benchmark to reflect the performance difference in your application.


## Security contact

To report a security vulnerability in this fork, please use
[GitHub private vulnerability reporting](https://github.com/fitzyracing1/fast-deep-equal/security/advisories/new)
rather than a public issue.


## License

[MIT](./LICENSE) - Copyright (c) 2017 Evgeny Poberezkin. The original license and
copyright notice are retained unchanged; fork changes are released under the same license.

Original project: https://github.com/epoberezkin/fast-deep-equal
