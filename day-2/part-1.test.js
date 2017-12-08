const getChecksum = require('./part-1');

test('example 1', () => {
  expect(
    getChecksum(`5	1	9	5
    7	5	3
    2	4	6	8`)
  ).toBe(18);
});
