# TDD - Jest Testing

## What I Learned

Mastered Jest testing fundamentals: writing unit tests, using assertions with `expect()`, testing functions with various inputs, and validating edge cases. Built test-driven development skills for validating utility functions like array filtering, string parsing, password validation, and date handling.

### Red-Green-Refactor Cycle

Understood the TDD methodology: **Red** (write failing tests), **Green** (write minimal code to pass tests), **Refactor** (improve code quality). This cycle ensures robust, well-tested functions from the ground up.

## Key Tests

```javascript
// Testing array uniqueness
test("return array with only unique values when duplicates are present", () => {
  expect(arrayUniquer([1, 4, 4, 5, 8, 8, 3])).toEqual([1, 4, 5, 8, 3]);
});

// Testing string math parsing
test("if string contains two numbers, return their sum", () => {
  expect(stringCalculator("3,3")).toBe(6);
});

// Testing password validation
test("pass if password contains correct length and at least one number", () => {
  expect(pwValidator("abcdsh12")).toBe(true);
});

// Testing empty edge case
test("if the cart is empty it returns 0", () => {
  expect(cartTotaler([])).toBe(0);
});

// Testing date object mapping
test('returns "November" for month 11', () => {
  const date = { month: 11 };
  expect(dateString(date)).toBe("November");
});
```

---

Homework assignment for backend course @Sundsgården Folkhögskola
