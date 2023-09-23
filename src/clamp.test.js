import clamp from "./clamp.js";

const x = clamp(1, 14, "this is a long sentence.");
const result = "this is a long";
const x1 = clamp(1, 11, 200);
const result1 = 11;
const x2 = clamp(-12, 11, -200);
const result2 = -12;

test(`"${x}" should equal "${result}"`, () => {
  expect(x).toEqual(result);
});

test(`"${x1}" should equal "${result1}"`, () => {
  expect(x1).toEqual(result1);
});

test(`"${x2}" should equal "${result2}"`, () => {
  expect(x2).toEqual(result2);
});
