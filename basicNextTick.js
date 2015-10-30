var process = (function(w, nextTick, process, prefixes, i, p, fn) {
   "use strict";
   p = w[process] || (w[process] = {});
   while (!fn && i < prefixes.length) fn = w[prefixes[i++] + 'equestAnimationFrame'];
   return {nextTick: p[nextTick] || (fn && fn.bind(w)) || w.setImmediate || w.setTimeout};
})(window, 'nextTick', 'process', 'r webkitR mozR msR oR'.split(' '), 0);