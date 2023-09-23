import reduce from "./reduce.js";

function pipe(...fns) {
  return function (val) {

    return reduce(fns, (prev, fn) => {
      return fn.call(this, prev);
    }, val);

  };
}

export default pipe;