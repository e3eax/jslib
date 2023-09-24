import isNotNil from "./isNotNil.js";

function divide(a, b) {
  if (isNotNil(a) && isNotNil(b)) return a / b;
}

export default divide;
