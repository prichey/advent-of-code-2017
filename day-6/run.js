const fs = require('fs-extra');
const inputFile = 'input.txt';

fs
  .readFile(inputFile)
  .then(data => {
    const input = data.toString();

    console.log(`Part 1: ${require('./part-1')(input)}`);
    console.log(`Part 2: ${require('./part-2')(input)}`);
  })
  .catch(e => {
    // console.log(e);
  });
