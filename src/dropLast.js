import drop from "./drop.js";
import isNil from "./isNil.js";
import reverseStr from "./reverseStr.js";

function dropLast(idx, list) {
  const result =
    typeof list === "string"
      ? reverseStr(drop(idx, reverseStr(list)))
      : drop(idx, list.reverse()).reverse();
  if (isNil(result)) return list;
  return result;
}

export default dropLast;
