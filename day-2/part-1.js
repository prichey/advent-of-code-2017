function getChecksum(input) {
  // just because it could be a 1-liner 😅
  return input
    .split('\n')
    .map(row => {
      const cols = row.split('\t').map(strNum => parseInt(strNum)); // convert to an array of ints
      return Math.max(...cols) - Math.min(...cols);
    })
    .reduce((sum, curr) => sum + curr);
}

module.exports = getChecksum;
