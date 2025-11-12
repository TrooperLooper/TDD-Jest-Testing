const dateString = require("./dateString");
test('returns "November" for month 11', () => {
  const date = { month: 11 };
  expect(dateString(date)).toBe("November");
});
