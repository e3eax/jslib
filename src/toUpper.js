function toUpper(str) {
  if (typeof str === "string" || str instanceof String) {
    return str.toUpperCase();
  }
}

export default toUpper;
