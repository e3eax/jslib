import clone from "./clone.js";
import reduce from "./reduce.js";

function pipe(...fns) {
  return function (val) {
    return reduce(fns, (prev, fn) => fn.call(this, clone(prev)), val);
  };
}

export default pipe;
