// thx https://www.redblobgames.com/grids/hexagons/#neighbors-cube!

const moves = {
  nw: [-1, 1, 0],
  n: [0, 1, -1],
  ne: [1, 0, -1],
  se: [1, -1, 0],
  s: [0, -1, 1],
  sw: [-1, 0, 1]
};

function addArrays(a, b) {
  if (a.length !== b.length) {
    return null; // cannot add arrays of different dimensions
  }

  const c = [];
  for (let i = 0; i < a.length; i++) {
    c.push(a[i] + b[i]);
  }
  return c;
}

function cubeDistance(a, b) {
  return (
    (Math.abs(a[0] - b[0]) + Math.abs(a[1] - b[1]) + Math.abs(a[2] - b[2])) / 2
  );
}

function distanceFromOrigin(cube) {
  return cubeDistance(cube, [0, 0, 0]);
}

function getNextLocation(current, move) {
  return addArrays(current, moves[move]);
}

exports.distanceFromOrigin = distanceFromOrigin;
exports.getNextLocation = getNextLocation;
