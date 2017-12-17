const calculateSmallestDelay = require('./part-2');

test('example 1', () => {
  expect(
    calculateSmallestDelay(`0: 3
1: 2
4: 4
6: 4`)
  ).toBe(10);
});
