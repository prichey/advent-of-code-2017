const calculateUsedSquares = require('./part-1');

test('example 1', () => {
  expect(calculateUsedSquares(`flqrgnkx`)).toBe(8108);
});
