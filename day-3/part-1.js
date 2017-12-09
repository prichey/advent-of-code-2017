function getDistanceToOne(input) {
  const coords = generateCoordsByIndex(input - 1); // input is 1-based but index is 0
  return Math.abs(coords[0]) + Math.abs(coords[1]); // manhattan distance
}

function generateCoordsByIndex(index) {
  const moves = [[1, 0], [0, 1], [-1, 0], [0, -1]]; // right, up, left, down
  let moveIndex = 0;
  let ringNum = 1;
  let pointerIndex = 0;
  let pointerCoords = [0, 0];

  while (index > pointerIndex) {
    pointerIndex++;
    pointerCoords = addArrays(pointerCoords, moves[moveIndex]);
    [moveIndex, ringNum] = getNextMoveIndexAndRingNum(
      moveIndex,
      pointerCoords,
      ringNum
    );
  }

  return pointerCoords;
}

function getNextMoveIndexAndRingNum(moveIndex, pointerCoords, ringNum) {
  if (moveIndex === 0 && pointerCoords[0] >= ringNum) return [1, ringNum];
  if (moveIndex === 1 && pointerCoords[1] >= ringNum) return [2, ringNum];
  if (moveIndex === 2 && pointerCoords[0] <= -ringNum) return [3, ringNum];
  if (moveIndex === 3 && pointerCoords[1] <= -ringNum) return [0, ringNum + 1];
  return [moveIndex, ringNum];
}

function addArrays(a, b) {
  let sum = [];
  for (let i = 0; i < a.length; i++) {
    sum.push(a[i] + b[i]);
  }
  return sum;
}

module.exports = getDistanceToOne;
