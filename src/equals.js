import curry from "./curry.js";

var equals = curry(function equals(a, b) {
  return b === a;
});

export default equals;
