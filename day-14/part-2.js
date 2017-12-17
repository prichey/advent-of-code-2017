const utils = require('./utils');

function calculateGroupedRegions(input) {
  const hashBase = input.toString().trim();
  const grid = [];

  // build up grid
  for (let i = 0; i < 128; i++) {
    const hashString = `${hashBase}-${i}`;
    const knotHash = utils.findKnotHash(hashString);
    const binHash = utils.hexStrToBinary(knotHash);
    grid.push(binHash.split(''));
  }

  return utils.traverseGridToFindNumGroupedRegions(grid);
}

module.exports = calculateGroupedRegions;
