function stepsToExit(input) {
  const array = input
    .trim()
    .split('\n')
    .map(num => parseInt(num)); // array of ints
  let steps = (pointerIndex = 0);

  while (pointerIndex >= 0 && pointerIndex < array.length) {
    const nextIndex = pointerIndex + array[pointerIndex];
    array[pointerIndex] =
      array[pointerIndex] >= 3
        ? array[pointerIndex] - 1
        : array[pointerIndex] + 1;
    pointerIndex = nextIndex;
    steps++;
  }

  return steps;
}

module.exports = stepsToExit;
