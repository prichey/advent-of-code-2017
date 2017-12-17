const calculateGroupedRegions = require('./part-2');

test('example 1', () => {
  expect(calculateGroupedRegions(`flqrgnkx`)).toBe(1242);
});
