import curry from "./curry.js";

function _all(fn, list) {
  var bool = true;

  for (const item of list) {
    if (!fn(item)) {
      bool = false;
    }
  }

  return bool;
}

var all = curry(_all);

export default all;
