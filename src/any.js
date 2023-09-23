import curry from "./curry.js";

function _any(fn, list) {
  for (const item of list) {
    if (fn(item)) {
      return true;
    }
  }
  return false;
}

var any = curry(_any);

export default lt;
