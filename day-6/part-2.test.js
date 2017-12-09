const getRedistributionCyclesInLoop = require('./part-2');

test('example 1', () => {
  expect(getRedistributionCyclesInLoop('0	2	7	0')).toBe(4);
});
