const stepsToExit = require('./part-1');

test('example 1', () => {
  expect(
    stepsToExit(`0
3
0
1
-3`)
  ).toBe(5);
});

test('example 2', () => {
  expect(stepsToExit(`1`)).toBe(1);
});

test('example 3', () => {
  expect(stepsToExit(`0`)).toBe(2);
});
