const stringCalculator = require("./stringCalculator");

test("empty string returns 0", () => {
  expect(stringCalculator("")).toBe(0);
});

test("if string contains a number, return this number", () => {
  expect(stringCalculator("8")).toBe(8);
});

test("if string contains two numbers, return their sum", () => {
  expect(stringCalculator("3,3")).toBe(6);
});
