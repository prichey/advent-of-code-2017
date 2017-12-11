const findKnotHash = require('./part-2');

test('example 1', () => {
  expect(findKnotHash('')).toBe('a2582a3a0e66e6e86e3812dcb672a272');
});

test('example 2', () => {
  expect(findKnotHash('AoC 2017')).toBe('33efeb34ea91902bb2f59c9920caa6cd');
});

test('example 3', () => {
  expect(findKnotHash('1,2,3')).toBe('3efbe78a8d82f29979031a4aa0b16a9d');
});

test('example 4', () => {
  expect(findKnotHash('1,2,4')).toBe('63960835bcdc130f0b66d7ff4f6a5a8e');
});
