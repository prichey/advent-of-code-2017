const foo = require('./part-2');

test('tautology', () => {
  expect(foo('')).toBe(true);
});
