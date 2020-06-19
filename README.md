# next-aop
> Aop for next.

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
