const getOrderOfProgramsAfterDance = require('./part-1');

test('example 1', () => {
  expect(getOrderOfProgramsAfterDance(`s1,x3/4,pe/b`, 5)).toBe('baedc');
});
