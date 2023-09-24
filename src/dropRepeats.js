import curry from "./curry.js";

function _dropRepeats(list) {
  const singles = {};
  const filtered = [];

  list.forEach((item) => {
    if (!singles[item]) {
      singles[item] = item;
      filtered.push(item);
    }
  });

  return filtered;
}

var dropRepeats = curry(_dropRepeats);

export default dropRepeats;
