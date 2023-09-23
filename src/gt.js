import curry from "./curry.js";

var gt = curry(function gt(a, b) {
  return b > a;
});

export default gt;
