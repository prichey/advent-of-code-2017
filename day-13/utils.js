function cloneArray(array) {
  return JSON.parse(JSON.stringify(array));
}

function getInitialState(input) {
  const state = [];

  input
    .toString()
    .trim()
    .split('\n')
    .map(layerStr => {
      const [depth, range] = layerStr.split(': ').map(val => parseInt(val));

      // account for layers without a scanner
      while (state.length < depth) {
        state.push(null);
      }

      state.push({
        scanPos: 0,
        scanDir: 1, // 1 for down, -1 for up
        range: range
      });
    });

  return state;
}

function getNextState(state, currentPos = 0) {
  const nextState = [];

  state.map((layer, i) => {
    // don't worry about state for layers we've already passed through
    if (i >= currentPos && layer !== null) {
      if (dirShouldReverse(layer)) layer.scanDir *= -1;
      layer.scanPos += layer.scanDir;
    }
    nextState.push(layer);
  });

  return nextState;
}

function dirShouldReverse(layer) {
  // if at the beginning and going up or the end and going down, reverse
  return (
    (layer.scanDir === -1 && layer.scanPos === 0) ||
    (layer.scanDir === 1 && layer.scanPos === layer.range - 1)
  );
}

exports.getInitialState = getInitialState;
exports.getNextState = getNextState;
exports.cloneArray = cloneArray;
