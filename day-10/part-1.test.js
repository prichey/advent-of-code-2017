const getProductOfFirstTwoNumbers = require('./part-1');

test('example 1', () => {
  expect(getProductOfFirstTwoNumbers('3,4,1,5', 5)).toBe(12);
});
