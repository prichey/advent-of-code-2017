const foo = require('./part-1');

test('tautology', () => {
  expect(foo('')).toBe(true);
});
