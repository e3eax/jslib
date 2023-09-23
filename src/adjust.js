import curry from "./curry.js";

function _adjust(index, fn, list) {
  var newList = list.slice();
  var length = list.length;
  var _index = (length + index) % length;

  newList[_index] = fn(list[_index]);
  return newList;
}

var adjust = curry(_adjust);

export default adjust;
