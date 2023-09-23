function reduce(list, fn, start) {
  var result = start;

  for (var idx = 0; idx < list.length; idx++) {
    result = fn(result, list[idx], idx);
  }

  return result;
}

export default reduce;
