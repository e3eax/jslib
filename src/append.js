import curry from "./curry";

var append = curry(function append(value, list) {
  var newList = [...list];
  newList.push(value);
  return newList;
});

export default append;
