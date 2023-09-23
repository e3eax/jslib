function toLower(str) {
  if (typeof str === "string" || str instanceof String) {
    return str.toLowerCase();
  }
}

export default toLower;
