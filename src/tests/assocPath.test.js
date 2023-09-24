import assocPath from "../assocPath.js";

const obj = {
  a: 5,
};

const obj1 = {
  a: {
    b: [1, 2, 3],
  },
};

const obj2 = {
  a: {
    b: [1, 2, 3],
    c: {
      d: [3, 2, 1],
    },
  },
};

const result = {
  a: {
    b: {
      c: 5,
    },
  },
};

const result1 = {
  a: {
    b: [1, 2, 3],
    c: {
      d: [3, 2, 1],
    },
  },
};

const result2 = {
  a: {
    b: [1, 2, 3],
    c: {
      d: [3, 2, 1],
      e: { f: 5000 },
    },
  },
};

test("obj should equal result", () => {
  expect(assocPath(["a", "b", "c"], 5, obj)).toEqual(result);
});

test("obj1 should equal result1", () => {
  expect(assocPath(["a", "c", "d"], [3, 2, 1], obj1)).toEqual(result1);
});

test("obj2 should equal result2", () => {
  expect(assocPath(["a", "c", "e"], { f: 5000 }, obj2)).toEqual(result2);
});
