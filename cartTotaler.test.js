const cartTotaler = require("./cartTotaler");
test("if the cart is empty it returns 0", () => {
  expect(cartTotaler([])).toBe(0);
});
