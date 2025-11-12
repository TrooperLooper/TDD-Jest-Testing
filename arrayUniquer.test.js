const arrayUniquer = require("./arrayUniquer");
test("return original array if it has no duplicates", () => {
  expect(arrayUniquer([1, 5, 3])).toEqual([1, 5, 3]);
});

test("return array with only unique values when duplicates are present", () => {
  expect(arrayUniquer([1, 4, 4, 5, 8, 8, 3])).toEqual([1, 4, 5, 8, 3]);
});

test("removes duplicate values from an array of numbers", () => {
  expect(arrayUniquer([8, 3, 3, 7, 8, 9, 1, 1])).toEqual([8, 3, 7, 9, 1]);
});
