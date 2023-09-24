import concat from "./concat.js";

function memoize(fn) {
  var cache = {};

  return function memoized(...args) {
    const key = concat(args[0], args[1]);
    if (cache.hasOwnProperty(key)) {
      return cache[key];
    }
    cache[key] = fn(...args);
    return cache[key];
  };
}

export default memoize;
