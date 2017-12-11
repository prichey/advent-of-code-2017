const getChecksum = require('./part-2');

test('example 1', () => {
  expect(
    getChecksum(`5	9	2	8
    9	4	7	3
    3	8	6	5`)
  ).toBe(9);
});
