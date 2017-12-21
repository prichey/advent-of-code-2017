const findRecoveredFrequency = require('./part-1');

test('example 1', () => {
  expect(
    findRecoveredFrequency(`set a 1
add a 2
mul a a
mod a 5
snd a
set a 0
rcv a
jgz a -1
set a 1
jgz a -2`)
  ).toBe(4);
});
