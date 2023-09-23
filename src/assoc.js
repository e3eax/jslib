import curry from "./curry.js";

function _assoc(key, value, obj) {
  const newObj = { ...obj };
  newObj[key] = value;
  return newObj;
}

var assoc = curry(_assoc);

export default assoc;
