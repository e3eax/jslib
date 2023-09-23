import curry from "./curry.js";

var multiply = curry(function multiply(a, b) {
  return b * a;
});

export default multiply;
