import isNil from "./isNil.js";

function defaultTo(defaultTo) {
  return function (value) {
    if (isNil(value)) return defaultTo;
    return value;
  };
}

export default defaultTo;
