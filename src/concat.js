import curry from "./curry.js";

var concat = curry(function concat(str, str2) {
  return str + str2;
});

export default concat;
