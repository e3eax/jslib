import assoc from "../assoc.js";

const obj = {
  a: 1,
  b: 2,
};

const obj1 = {
  a: 1,
  b: 2,
  c: 23,
};

test("prop c should equal 3", () => {
  const newObj = assoc("c", 3, obj);
  expect(newObj["c"]).toEqual(3);
});

test("prop c should equal [1,2,3]", () => {
  const newObj = assoc("c", [1, 2, 3], obj);
  expect(newObj["c"]).toEqual([1, 2, 3]);
});

test("prop d should equal {e: 5}", () => {
  const newObj = assoc("d", { e: 5 }, obj);
  expect(newObj["d"]).toEqual({ e: 5 });
});
