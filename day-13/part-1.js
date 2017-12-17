const utils = require('./utils');

function calculateTripSeverity(input) {
  let state = utils.getInitialState(input);

  let currentPos = -1; // start outside of state
  let severity = 0;

  while (++currentPos < state.length) {
    const currentLayer = state[currentPos];

    if (currentLayer !== null && currentLayer.scanPos === 0) {
      // caught!
      severity += currentPos * currentLayer.range;
    }

    state = utils.getNextState(state);
  }

  return severity;
}

module.exports = calculateTripSeverity;
