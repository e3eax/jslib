function debounce(fn, delay) {
  var id;

  return function (...args) {
    if (id) clearTimeout(id);
    id = setTimeout(() => {
      fn(...args);
    }, delay);
  };
}
