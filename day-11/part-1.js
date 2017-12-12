const utils = require('./utils');

function stepsToChild(input) {
  let location = [0, 0, 0]; // cube coordinates, see https://www.redblobgames.com/grids/hexagons/

  input
    .toString()
    .trim()
    .split(',')
    .map(move => {
      location = utils.getNextLocation(location, move);
    });

  return utils.distanceFromOrigin(location);
}

module.exports = stepsToChild;
