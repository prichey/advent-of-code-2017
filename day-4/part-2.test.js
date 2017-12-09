const countValidPasswords = require('./part-2');
const utils = require('./utils');

test('example 1', () => {
  expect(
    countValidPasswords(`
      aab aba
      bb bb`)
  ).toBe(0);
});

test('example 2', () => {
  expect(
    countValidPasswords(`
    acd dca
    ac bc
  `)
  ).toBe(1);
});

test('example 3', () => {
  expect(
    countValidPasswords(`
    bcd def
    gha ahe
  `)
  ).toBe(2);
});
