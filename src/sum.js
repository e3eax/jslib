function sum(args) {
  var total = 0;
  for (const arg of args) {
    total += arg;
  }
  return total;
}

export default sum;
