/*!
 * name: @jswork/next-aop
 * description: Aop for next.
 * homepage: https://github.com/afeiship/next-aop
 * version: 1.0.0
 * date: 2020-11-21 09:22:14
 * license: MIT
 */

(function () {
  var global = global || this || window || Function('return this')();
  var nx = global.nx || require('@jswork/next');
  var DEFAULT_OPTIONS = { context: global, before: nx.noop, after: nx.noop };

  nx.aop = function (inCallback, inOptions) {
    var options = nx.mix(null, DEFAULT_OPTIONS, inOptions);

    return function () {
      var args = nx.slice(arguments);
      var ctx = options.context;
      var targetArgs = [inCallback].concat(args);
      var res;
      options.before.apply(ctx, targetArgs);
      res = inCallback.apply(ctx, args);
      options.after.apply(ctx, targetArgs);
      return res;
    };
  };

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = nx.aop;
  }
})();
