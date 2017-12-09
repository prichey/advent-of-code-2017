const utils = require('./utils');

test('example 1', () => {
  expect(utils.validatePassword('aa bb cc dd ee')).toBe(true);
});

test('example 2', () => {
  expect(utils.validatePassword('aa bb cc dd aa')).toBe(false);
});

test('example 3', () => {
  expect(utils.validatePassword('aa bb cc dd aaa')).toBe(true);
});

test('example 4', () => {
  expect(utils.validatePasswordExcludingAnagrams('abcde fghij')).toBe(true);
});

test('example 5', () => {
  expect(utils.validatePasswordExcludingAnagrams('abcde xyz ecdab')).toBe(
    false
  );
});

test('example 6', () => {
  expect(utils.validatePasswordExcludingAnagrams('a ab abc abd abf abj')).toBe(
    true
  );
});

test('example 7', () => {
  expect(
    utils.validatePasswordExcludingAnagrams('iiii oiii ooii oooi oooo')
  ).toBe(true);
});

test('example 8', () => {
  expect(utils.validatePasswordExcludingAnagrams('oiii ioii iioi iiio')).toBe(
    false
  );
});
