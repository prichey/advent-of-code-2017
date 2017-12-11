const getNumGarbageCharacters = require('./part-2');

test('example 1', () => {
  expect(getNumGarbageCharacters('<>')).toBe(0);
});

test('example 2', () => {
  expect(getNumGarbageCharacters('<random characters>')).toBe(17);
});

test('example 3', () => {
  expect(getNumGarbageCharacters('<<<<>')).toBe(3);
});

test('example 4', () => {
  expect(getNumGarbageCharacters('<{!>}>')).toBe(2);
});

test('example 5', () => {
  expect(getNumGarbageCharacters('<!!>')).toBe(0);
});

test('example 6', () => {
  expect(getNumGarbageCharacters('<!!!>>')).toBe(0);
});

test('example 7', () => {
  expect(getNumGarbageCharacters('<{o"i!a,<{i<a>')).toBe(10);
});
