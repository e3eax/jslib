import curry from "./curry.js";

var concat = curry(function concat(str, str2) {
  return str.toString() + str2.toString();
});

export default concat;
