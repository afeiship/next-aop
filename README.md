# next-aop
> Aop for next.

[![npm][npm-image]][npm-url]
![NPM](https://img.shields.io/npm/l/@feizheng/next-aop)
![npm bundle size](https://img.shields.io/bundlephobia/minzip/@feizheng/next-aop)
![npm](https://img.shields.io/npm/dw/@feizheng/next-aop)


## installation
```bash
npm install -S @feizheng/next-aop
```

## usage
```js
import '@feizheng/next-aop';

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
> Code released under [the MIT license](https://github.com/afeiship/next-aop/blob/master/LICENSE.txt).

[npm-image]: https://img.shields.io/npm/v/@feizheng/next-aop
[npm-url]: https://npmjs.org/package/@feizheng/next-aop
