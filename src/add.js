import curry from "./curry.js";

var add = curry(function add(a, b) {
  return a + b;
});

export default add;
