const nx = require('@feizheng/next-js-core2');
require('../src/next-aop');

describe('api.basic test', () => {
  test('nx.aop', function () {
    console.log = nx.aop(console.log, {
      before: function (oldConsole) {
        oldConsole('=--before--=');
      },
      after: function (oldConsole) {
        oldConsole('=--after--=');
      },
    });

    console.log('---abc---');
  });
});
