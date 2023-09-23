import curry from "./curry.js";

var lt = curry(function lt(a, b) {
  return b < a;
});

export default lt;
