const getNextValueLargerThanInput = require('./part-2');

test('example 1', () => {
  expect(getNextValueLargerThanInput(2)).toBe(4);
});

test('example 2', () => {
  expect(getNextValueLargerThanInput(4)).toBe(5);
});

test('example 3', () => {
  expect(getNextValueLargerThanInput(54)).toBe(57);
});

test('example 4', () => {
  expect(getNextValueLargerThanInput(362)).toBe(747);
});
