import pipe from "./pipe.js";

function compose(...fns) {
  return pipe.call(this, ...fns.reverse());
}

export default compose;