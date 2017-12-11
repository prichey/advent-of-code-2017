const getTotalScoreOfGroups = require('./part-1');

test('example 1', () => {
  expect(getTotalScoreOfGroups('{}')).toBe(1);
});

test('example 2', () => {
  expect(getTotalScoreOfGroups('{{{}}}')).toBe(6);
});

test('example 3', () => {
  expect(getTotalScoreOfGroups('{{},{}}')).toBe(5);
});

test('example 4', () => {
  expect(getTotalScoreOfGroups('{}')).toBe(1);
});

test('example 5', () => {
  expect(getTotalScoreOfGroups('{{{},{},{{}}}}')).toBe(16);
});

test('example 6', () => {
  expect(getTotalScoreOfGroups('{<a>,<a>,<a>,<a>}')).toBe(1);
});

test('example 7', () => {
  expect(getTotalScoreOfGroups('{{<ab>},{<ab>},{<ab>},{<ab>}}')).toBe(9);
});

test('example 8', () => {
  expect(getTotalScoreOfGroups('{{<!!>},{<!!>},{<!!>},{<!!>}}')).toBe(9);
});

test('example 9', () => {
  expect(getTotalScoreOfGroups('{{<a!>},{<a!>},{<a!>},{<ab>}}')).toBe(3);
});
