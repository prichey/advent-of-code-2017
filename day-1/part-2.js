function sumDoubles(input) {
  if (input.length % 2 === 1) return null; // only works for even length

  let sum = 0;
  for (let i = 0; i < input.length; i++) {
    const [thisIndex, nextIndex] = [i, (i + input.length / 2) % input.length];
    if (input[thisIndex] === input[nextIndex]) {
      sum += parseInt(input[thisIndex]);
    }
  }

  return sum;
}

module.exports = sumDoubles;
