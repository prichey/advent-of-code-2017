const stepsToExit = require('./part-2');

test('example 1', () => {
  expect(
    stepsToExit(`0
3
0
1
-3`)
  ).toBe(10);
});
