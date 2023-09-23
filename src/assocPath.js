import assoc from "./assoc.js";
import curry from "./curry.js";

function _assocPath(path, value, obj) {
  const len = path.length;

  if (len === 0) {
    return value;
  }

  const key = path[0];

  if (len > 1) {
    var nextObj =
      obj && obj[key] && typeof obj[key] === "object" ? { ...obj[key] } : {};
    value = _assocPath(path.slice(1), value, nextObj);
  }

  return assoc(key, value, obj);
}

var assocPath = curry(_assocPath);

export default assocPath;
