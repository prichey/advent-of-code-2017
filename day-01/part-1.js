function sumDoubles(input) {
  let sum = 0;
  for (let i = 0; i < input.length; i++) {
    const [thisIndex, nextIndex] = [i, (i + 1) % input.length];
    if (nextIndex >= input.length) nextIndex = 0;
    if (input[thisIndex] === input[nextIndex]) {
      sum += parseInt(input[thisIndex]);
    }
  }

  return sum;
}

module.exports = sumDoubles;
