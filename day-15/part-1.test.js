const findJudgesFinalCountAfterNumRounds = require('./part-1');

test('example 1', () => {
  expect(
    findJudgesFinalCountAfterNumRounds(
      `Generator A starts with 65
  Generator B starts with 8921`,
      5
    )
  ).toBe(1);
});

test('example 2', () => {
  expect(
    findJudgesFinalCountAfterNumRounds(
      `Generator A starts with 65
  Generator B starts with 8921`,
      40000000
    )
  ).toBe(588);
});
