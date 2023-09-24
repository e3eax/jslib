function difference(list, compare) {
  const notIncluded = [];

  for (const x of list) {
    var includes = false;
    for (const y of compare) {
      if (JSON.stringify(x) == JSON.stringify(y)) {
        includes = true;
        continue;
      }
      if (x == y) includes = true;
    }
    if (!includes) notIncluded.push(x);
  }

  return notIncluded;
}

export default difference;
