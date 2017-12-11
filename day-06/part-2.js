function cloneArray(array) {
  return JSON.parse(JSON.stringify(array));
}

function getNextState(prevState) {
  const highestIndex = prevState.reduce(
    (currentHighestIndex, currentVal, currentIndex) =>
      currentVal > prevState[currentHighestIndex]
        ? currentIndex
        : currentHighestIndex,
    0
  );

  let nextState = cloneArray(prevState);
  nextState[highestIndex] = 0;
  for (let i = 0; i < prevState[highestIndex]; i++) {
    // start at the next index and wrap around
    nextState[(highestIndex + 1 + i) % nextState.length]++;
  }
  return nextState;
}

function getRedistributionCyclesInLoop(input) {
  let cycles = 0;
  let state = input
    .toString()
    .trim()
    .split('\t')
    .map(num => parseInt(num)); // state is an array of ints
  let memory = new Set();
  let loopState = false;

  while (true) {
    const strIndex = state.join(','); // [0, 1] => '0,1'
    if (memory.has(strIndex)) {
      if (loopState === true) {
        break;
      } else {
        loopState = true;

        // reset cycles and memory
        cycles = 0;
        memory.clear();
      }
    }
    memory.add(strIndex);

    const nextState = getNextState(state);
    state = cloneArray(nextState);
    cycles++;
  }

  return cycles;
}

module.exports = getRedistributionCyclesInLoop;
