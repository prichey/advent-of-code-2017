const utils = require('./utils');

function getFurthestDistance(input) {
  let location = [0, 0, 0]; // cube coordinates
  let furthestDistance = 0;

  input
    .toString()
    .trim()
    .split(',')
    .map(move => {
      location = utils.getNextLocation(location, move);

      const distanceFromOrigin = utils.distanceFromOrigin(location);
      if (distanceFromOrigin > furthestDistance)
        furthestDistance = distanceFromOrigin;
    });

  return furthestDistance;
}

module.exports = getFurthestDistance;
