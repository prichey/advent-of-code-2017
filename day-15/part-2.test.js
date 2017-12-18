const findJudgesFinalCountAfterNumRounds = require('./part-2');

test('example 1', () => {
  expect(
    findJudgesFinalCountAfterNumRounds(
      `Generator A starts with 65
  Generator B starts with 8921`,
      5
    )
  ).toBe(0);
});

test('example 2', () => {
  expect(
    findJudgesFinalCountAfterNumRounds(
      `Generator A starts with 65
  Generator B starts with 8921`,
      1056
    )
  ).toBe(1);
});

test('example 3', () => {
  expect(
    findJudgesFinalCountAfterNumRounds(
      `Generator A starts with 65
  Generator B starts with 8921`,
      5000000
    )
  ).toBe(309);
});
