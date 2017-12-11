const getLargestEverRegisterValue = require('./part-2');

test('example 1', () => {
  expect(
    getLargestEverRegisterValue(`b inc 5 if a > 1
a inc 1 if b < 5
c dec -10 if a >= 1
c inc -20 if c == 10`)
  ).toBe(10);
});
