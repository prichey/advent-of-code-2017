const getRedistributionCycles = require('./part-1');

test('example 1', () => {
  expect(getRedistributionCycles('0	2	7	0')).toBe(5);
});
