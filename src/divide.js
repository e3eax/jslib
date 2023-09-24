import curry from "./curry.js";
import isNotNil from "./isNotNil.js";

function _divide(a, b) {
  if (isNotNil(a) && isNotNil(b)) return a / b;
}

var divide = curry(_divide);

export default divide;
