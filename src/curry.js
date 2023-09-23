import curryN from "./curryN.js";

function curry(fn) {
  return curryN(fn.length, fn);
}

export default curry;
