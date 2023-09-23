function clone(obj) {
  if (typeof obj !== "object" || obj === null) return obj;

  const newObj = Array.isArray(obj) ? [] : {};

  for (const key in obj) {
    const value = obj[key];
    newObj[key] = clone(value);
  }

  return newObj;
}

export default clone;
