function complement(fn) {
  return function (val) {
    return !fn(val);
  };
}

export default complement;
