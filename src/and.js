import curry from "./curry.js";

var and = curry(function and(a, b) {
  return a === b;
});

export default and;
