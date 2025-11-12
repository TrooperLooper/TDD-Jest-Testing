const pwValidator = require("./pwValidator");

test("false if password is less than 8 chars", () => {
  expect(pwValidator("lars123")).toBe(false);
});
test("false if password does not contain at least one num", () => {
  expect(pwValidator("abcdsh")).toBe(false);
});

test("pass if password contains correct length and at least one number", () => {
  expect(pwValidator("abcdsh12")).toBe(true);
});
