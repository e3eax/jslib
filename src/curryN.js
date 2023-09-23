function curryN(length, fn) {
  return function curried(...args) {
    if (length !== args.length) {
      return curried.bind(this, ...args);
    }
    return fn.call(this, ...args);
  };
}

export default curryN;
