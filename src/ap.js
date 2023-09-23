import curry from "./curry.js";

function _ap(fns, list) {
  var newList = [];
  var fnsLen = fns.length;
  var listLen = list.length;

  for (var i = 0; i < fnsLen; i++) {
    newList[i] = [];
    var currentFunc = fns[i];

    for (var j = 0; j < listLen; j++) {
      newList[i].push(currentFunc(list[j]));
    }
  }

  return newList;
}

var ap = curry(_ap);

export default ap;
