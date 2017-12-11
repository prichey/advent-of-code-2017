function getChecksum(input) {
  // just because it could be a 1-liner 😅
  return input
    .trim()
    .split('\n')
    .map(row => {
      // convert to an array of ints, sorted large -> small
      const cols = row
        .split('\t')
        .map(strNum => parseInt(strNum))
        .sort((x, y) => x < y);

      let sum = 0;
      for (let i = 0; i < cols.length; i++) {
        for (let j = i + 1; j < cols.length; j++) {
          const [curr, next] = [cols[i], cols[j]];
          // if curr is evenly divisible by next, add curr / next to the sum
          if (curr !== next && curr % next === 0) sum += curr / next;
        }
      }

      return sum;
    })
    .reduce((sum, curr) => sum + curr);
}

module.exports = getChecksum;
