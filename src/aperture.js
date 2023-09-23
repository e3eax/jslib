import curry from "./curry.js";

function _aperture(num, list) {
  var len = list.length;
  var newList = [];

  if (num <= len) {
    for (var i = 0; i < len; i++) {
      if (list[i + num - 1]) {
        newList[i] = [];

        for (var j = 0; j <= num - 1; j++) {
          newList[i].push(list[i + j]);
        }
      }
    }
  }

  return newList;
}

var aperture = curry(_aperture);

export default aperture;
