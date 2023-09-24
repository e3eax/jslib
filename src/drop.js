import curry from "./curry.js";

function _drop(idx, list) {
  const len = list.length;

  if (idx > len) {
    return [];
  }

  return list.slice(idx);
}

var drop = curry(_drop);

export default drop;
