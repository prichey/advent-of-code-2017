function distanceToOne(num) {
  if (num < 1) return null;
  if (num === 1) return 0;

  const ringNum = getRingNum(num);
  const ringmax = Math.pow(2 * ringNum + 1, 2); // max number in ring
  const ringmaxCoords = [ringNum, -ringNum];
  const maxNumDifference = ringmax - num;

  let numberCoords;
  if (num === ringmax) {
    numberCoords = ringmaxCoords;
  } else {
    let [pointerNum, pointerCoords] = [ringmax, ringmaxCoords];
    let numMoves = 0;
    let moveIndex = 0;

    const movesPerSide = Math.pow(ringmax, 0.5) - 1;
    const moves = [[-1, 0], [0, 1], [1, 0], [0, -1]];

    while (pointerNum > num) {
      if (numMoves >= movesPerSide) {
        moveIndex++;
        while (moveIndex > moves.length) moveIndex -= moves.length;
        numMoves = 0;
      }

      pointerCoords = addArrays(pointerCoords, moves[moveIndex]);

      numMoves++;
      pointerNum--;
    }

    numberCoords = pointerCoords;
  }

  // find manhattan difference between two coords
  const dist = Math.abs(numberCoords[0]) + Math.abs(numberCoords[1]);

  return dist;
}

// I can't actually explain how this works
// 0-based
function getRingNum(num) {
  let ringNum = Math.ceil(Math.pow(num, 0.5));
  if (ringNum % 2 === 0) ringNum++; // if even, bump up
  if (ringNum > 1) {
    ringNum += 1; // go to next even number
    ringNum = ringNum / 2; // divide by 2
  }
  return ringNum - 1; // 0 index
}

function addArrays(a, b) {
  if (a.length !== b.length) return null; // can't add arrays of different length

  let sum = [];
  for (let i = 0; i < a.length; i++) {
    sum.push(a[i] + b[i]);
  }
  return sum;
}

module.exports = distanceToOne;
