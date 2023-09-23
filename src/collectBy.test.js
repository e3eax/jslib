import collectBy from "./collectBy.js";

const list = [
  { type: "breakfast", item: "Ham&Eggs", cal: 100 },
  { type: "lunch", item: "Steak", cal: 100 },
  { type: "dinner", item: "Steak", cal: 200 },
  { type: "breakfast", item: "Ham&Eggs", cal: 100 },
  { type: "lunch", item: "Pizza", cal: 150 },
];

const result = [
  [
    { type: "breakfast", item: "Ham&Eggs", cal: 100 },
    { type: "breakfast", item: "Ham&Eggs", cal: 100 },
  ],
  [
    { type: "lunch", item: "Steak", cal: 100 },
    { type: "lunch", item: "Pizza", cal: 150 },
  ],
  [{ type: "dinner", item: "Steak", cal: 200 }],
];

const result1 = [
  [
    { type: "breakfast", item: "Ham&Eggs", cal: 100 },
    { type: "breakfast", item: "Ham&Eggs", cal: 100 },
  ],
  [
    { type: "lunch", item: "Steak", cal: 100 },
    { type: "dinner", item: "Steak", cal: 200 },
  ],
  [{ type: "lunch", item: "Pizza", cal: 150 }],
];

const result2 = [
  [
    { type: "breakfast", item: "Ham&Eggs", cal: 100 },
    { type: "lunch", item: "Steak", cal: 100 },
    { type: "breakfast", item: "Ham&Eggs", cal: 100 },
  ],
  [{ type: "lunch", item: "Pizza", cal: 150 }],
  [{ type: "dinner", item: "Steak", cal: 200 }],
];

test("should equal result", () => {
  expect(collectBy("type", list)).toEqual(result);
});

test("should equal result1", () => {
  expect(collectBy("item", list)).toEqual(result1);
});

test("should equal result2", () => {
  expect(collectBy("cal", list)).toEqual(result2);
});
