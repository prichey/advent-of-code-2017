const calculateTripSeverity = require('./part-1');

test('example 1', () => {
  expect(
    calculateTripSeverity(`0: 3
  1: 2
  4: 4
  6: 4`)
  ).toBe(24);
});
