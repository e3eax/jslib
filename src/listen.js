function listen(event, ...fns) {
  if (event === "init") event = "DOMContentLoaded";
  return function (node) {
    fns.forEach((fn) => node.addEventListener(event, fn.bind(node)));
  };
}

export default listen;
