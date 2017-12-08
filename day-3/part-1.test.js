const distanceToOne = require('./part-1');

test('example 1', () => {
  expect(distanceToOne(1)).toBe(0);
});

test('example 2', () => {
  expect(distanceToOne(12)).toBe(3);
});

test('example 3', () => {
  expect(distanceToOne(23)).toBe(2);
});

test('example 4', () => {
  expect(distanceToOne(1024)).toBe(31);
});
