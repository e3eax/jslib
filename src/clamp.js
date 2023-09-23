import curry from "./curry.js";

function _clamp(from, to, val) {
  if (typeof val === "string") return val.substring(--from, to);

  if (val < from) return from;

  if (val > to) return to;

  return val;
}

var clamp = curry(_clamp);

export default clamp;
