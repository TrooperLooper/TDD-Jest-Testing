const dateFormatter = require("./dateFormatter");

test("null input return empty string", () => {
  expect(dateFormatter(null)).toBe("");
});

test("if undefined return empty string", () => {
  expect(dateFormatter(undefined)).toBe("");
});

test("formats the date to string MM/DD/YYYY", () => {
  const date = new Date("2025-11-06");
  expect(dateFormatter(date)).toBe("11/06/2025");
});

test("formats another date to string MM/DD/YYYY", () => {
  const date = new Date("2020-01-15");
  expect(dateFormatter(date)).toBe("01/15/2020");
});

test("formats another date to string MM/DD/YYYY", () => {
  const date = new Date("2023-10-13");
  expect(dateFormatter(date)).toBe("10/13/2023");
});
