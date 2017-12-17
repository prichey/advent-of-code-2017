const utils = require('./utils');

// is slow :/
function calculateSmallestDelay(input) {
  let startState = utils.getInitialState(input);
  let caught = true;
  let delay = 0;

  while (caught) {
    let state = utils.cloneArray(startState);
    let currentPos = -1; // start outside of state

    caught = false;
    while (++currentPos < state.length) {
      if (state[currentPos] !== null && state[currentPos].scanPos === 0) {
        caught = true;
        break;
      }

      state = utils.getNextState(state, currentPos);
    }

    if (caught !== true) {
      return delay;
    } else {
      startState = utils.getNextState(startState);
      delay++;
    }
  }
}

module.exports = calculateSmallestDelay;
