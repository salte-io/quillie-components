<div align="center">

  [![NPM Version][npm-version-image]][npm-url]
  [![NPM Downloads][npm-downloads-image]][npm-url]
  [![CI Build][github-actions-image]][github-actions-url]
  [![Coveralls][coveralls-image]][coveralls-url]

  [![semantic-release][semantic-release-image]][semantic-release-url]
  
</div>

## Install

```sh
$ npm install @salte-io/quillie-components
```

## Usage

```tsx
import React from 'react';
import { Button, Theme } from '@salte-io/quillie-components';

export function MyComponent(): JSX.Element {
  return (
    <Button theme={Theme.Secondary}>
      My Super Cool Button
    </Button>
  );
}
```

## Known Issues

_These are issues that we know about, but don't have a clear fix for!_

**There are currently no known issues, thanks for checking!**

[npm-version-image]: https://img.shields.io/npm/v/@salte-io/quillie-components.svg?style=flat
[npm-downloads-image]: https://img.shields.io/npm/dm/@salte-io/quillie-components.svg?style=flat
[npm-url]: https://npmjs.org/package/@salte-io/quillie-components

[github-actions-image]: https://github.com/salte-io/quillie-components/actions/workflows/CI.yml/badge.svg?branch=main
[github-actions-url]: https://github.com/salte-io/quillie-components/actions/workflows/CI.yml

[coveralls-image]: https://img.shields.io/coveralls/salte-io/quillie-components.svg
[coveralls-url]: https://coveralls.io/github/salte-io/quillie-components?branch=main

[semantic-release-url]: https://github.com/semantic-release/semantic-release
[semantic-release-image]: https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg
