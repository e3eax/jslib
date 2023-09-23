import curry from "./curry.js";

function _count(fn, list) {
  var counter = 0;
  for (var i = 0; i < list.length; i++) {
    if (fn(list[i])) counter++;
  }

  return counter;
}

var count = curry(_count);