# @fitzyracing/fast-deep-equal

`@fitzyracing/fast-deep-equal` is a drop-in fork of [fast-deep-equal](https://github.com/epoberezkin/fast-deep-equal) and part of [360 Bench](https://github.com/fitzyracing1/360-bench). It is based on upstream `fast-deep-equal@3.1.3`, and the API is unchanged. All credit for the original library goes to its authors and contributors.

## What the fork fixes (summary of [README.md](../README.md))

- No more `TypeError: a.valueOf is not a function` on null-prototype objects (`Object.create(null)`).
- Plain objects with a `toString` or `valueOf` property are compared key by key instead of crashing.
- Two invalid Dates are now equal.
- `index.d.ts` is a proper module declaration, so types resolve under the scoped name.

The full details and links to the upstream issues are in [README.md](../README.md).

Pages: [Getting started](getting-started.md) · [Architecture](architecture.md) · [Contributing](contributing.md)

This repo has no CI workflow.

## License

MIT. The original notice is kept: Copyright (c) 2017 Evgeny Poberezkin.
Modifications: Copyright (c) 2026 Joshua Almeida.
