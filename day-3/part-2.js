function getNextValueLargerThanInput(input) {
  let moveDict = {}; // get out the way
  const moves = [[1, 0], [0, 1], [-1, 0], [0, -1]]; // right, up, left, down

  let ringNum = 1;
  let moveIndex = 0;
  let pointerValue = 1;
  let pointerCoords = [0, 0];
  let pointerIndex = 0;

  moveDict[pointerCoords] = pointerValue;

  while (pointerValue <= input) {
    pointerIndex++;
    pointerCoords = addArrays(pointerCoords, moves[moveIndex]); // move to next spot
    pointerValue = getSumOfNeighbors(pointerCoords, moveDict);
    moveDict[pointerCoords] = pointerValue;

    [moveIndex, ringNum] = getNextMoveIndexAndRingNum(
      moveIndex,
      pointerCoords,
      ringNum
    );
  }

  return pointerValue;
}

function getNextMoveIndexAndRingNum(moveIndex, pointerCoords, ringNum) {
  if (moveIndex === 0 && pointerCoords[0] >= ringNum) return [1, ringNum];
  if (moveIndex === 1 && pointerCoords[1] >= ringNum) return [2, ringNum];
  if (moveIndex === 2 && pointerCoords[0] <= -ringNum) return [3, ringNum];
  if (moveIndex === 3 && pointerCoords[1] <= -ringNum) return [0, ringNum + 1];
  return [moveIndex, ringNum];
}

function getSumOfNeighbors(coords, moveDict) {
  const [x, y] = coords;
  let sum = 0;

  for (let i = -1; i <= 1; i++) {
    for (let j = -1; j <= 1; j++) {
      if (i !== 0 || j !== 0) {
        const neighborCoords = [x + i, y + j];
        if (neighborCoords in moveDict) {
          // console.log([x, y], [i, j], neighborCoords, moveDict[neighborCoords]);
          sum += moveDict[neighborCoords];
        }
      }
    }
  }

  return sum;
}

function addArrays(a, b) {
  let sum = [];
  for (let i = 0; i < a.length; i++) {
    sum.push(a[i] + b[i]);
  }
  return sum;
}

module.exports = getNextValueLargerThanInput;
