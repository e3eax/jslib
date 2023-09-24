function difference(list, compare) {
  const notIncluded = [];

  for (const x of list) {
    var includes = false;
    for (const y of compare) {
      if (x == y) includes = true;
    }
    if (!includes) notIncluded.push(x);
  }

  return notIncluded;
}
