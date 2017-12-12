const stepsToChild = require('./part-1');

test('example 1', () => {
  expect(stepsToChild('ne,ne,ne')).toBe(3);
});

test('example 2', () => {
  expect(stepsToChild('ne,ne,sw,sw')).toBe(0);
});

test('example 3', () => {
  expect(stepsToChild('ne,ne,s,s')).toBe(2);
});

test('example 4', () => {
  expect(stepsToChild('se,sw,se,sw,sw')).toBe(3);
});
