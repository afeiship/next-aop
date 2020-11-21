# next-aop
> Aop for next.

[![version][version-image]][version-url]
[![license][license-image]][license-url]
[![size][size-image]][size-url]
[![download][download-image]][download-url]

## installation
```bash
npm install -S @jswork/next-aop
```

## usage
```js
import '@jswork/next-aop';

console.log = nx.aop(console.log, {
  before: function (oldConsole) {
    oldConsole('=--before--=');
  },
  after: function (oldConsole) {
    oldConsole('=--after--=');
  },
});

// test：
console.log('---abc---');

// =--before--=
// ---abc---
// =--after--=
```

## license
Code released under [the MIT license](https://github.com/afeiship/next-aop/blob/master/LICENSE.txt).

[version-image]: https://img.shields.io/npm/v/@jswork/next-aop
[version-url]: https://npmjs.org/package/@jswork/next-aop

[license-image]: https://img.shields.io/npm/l/@jswork/next-aop
[license-url]: https://github.com/afeiship/next-aop/blob/master/LICENSE.txt

[size-image]: https://img.shields.io/bundlephobia/minzip/@jswork/next-aop
[size-url]: https://github.com/afeiship/next-aop/blob/master/dist/next-aop.min.js

[download-image]: https://img.shields.io/npm/dm/@jswork/next-aop
[download-url]: https://www.npmjs.com/package/@jswork/next-aop
