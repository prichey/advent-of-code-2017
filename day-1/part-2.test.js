const sumDoubles = require('./part-2');

test('example 1', () => {
  expect(sumDoubles('1212')).toBe(6);
});

test('example 2', () => {
  expect(sumDoubles('1221')).toBe(0);
});

test('example 3', () => {
  expect(sumDoubles('123425')).toBe(4);
});

test('example 4', () => {
  expect(sumDoubles('123123')).toBe(12);
});

test('example 4', () => {
  expect(sumDoubles('12131415')).toBe(4);
});
