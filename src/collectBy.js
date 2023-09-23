import curry from "./curry.js";

function _collectBy(key, list) {
  const newList = [];
  const obj = {};
  const len = list.length;

  for (var i = 0; i < len; i++) {
    const idx = list[i][key];
    obj[idx] ? obj[idx].push(list[i]) : (obj[idx] = [list[i]]);
  }

  for (const prop in obj) {
    newList.push(obj[prop]);
  }

  return newList;
}

var collectBy = curry(_collectBy);

export default collectBy;
