const countValidPasswords = require('./part-2');
const utils = require('./utils');

test('example 1', () => {
  expect(countValidPasswords('aa bb cc dd aa')).toBe(0);
});

test('example 2', () => {
  expect(countValidPasswords('aa bb cc dd aaa')).toBe(1);
});

test('example 3', () => {
  expect(
    countValidPasswords(`aa bb
    cc dd`)
  ).toBe(2);
});

test('example 4', () => {
  expect(
    countValidPasswords(`aa bb
    cc cc`)
  ).toBe(1);
});

test('example 5', () => {
  expect(
    countValidPasswords(`aa aa
    cc cc`)
  ).toBe(0);
});

test('example 6', () => {
  expect(
    countValidPasswords(`aa bb
    cc cc
    dd ee`)
  ).toBe(2);
});
