const utils = require('./utils');

function calculateUsedSquares(input) {
  let usedSquares = 0;
  const hashBase = input.toString().trim();

  for (let i = 0; i < 128; i++) {
    const hashString = `${hashBase}-${i}`;
    const knotHash = utils.findKnotHash(hashString);
    usedSquares += utils.calculateUsedSquaresFromHash(knotHash);
  }

  return usedSquares;
}

module.exports = calculateUsedSquares;
