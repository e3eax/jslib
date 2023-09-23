import curry from "./curry.js";

var always = curry(function _always(val) {
  return function () {
    return val;
  };
});

export default always;
