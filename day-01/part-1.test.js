const sumDoubles = require('./part-1');

test('example 1', () => {
  expect(sumDoubles('1122')).toBe(3);
});

test('example 2', () => {
  expect(sumDoubles('1111')).toBe(4);
});

test('example 3', () => {
  expect(sumDoubles('1234')).toBe(0);
});

test('example 4', () => {
  expect(sumDoubles('91212129')).toBe(9);
});
