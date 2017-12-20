const utils = require('./utils');

function getSecondValue(input) {
  const offset = parseInt(input);

  let second = null;
  let curPos = 0;

  // yay optimization via not caring about things
  for (let i = 1; i <= 50000000; i++) {
    curPos = (curPos + offset) % i + 1;
    if (curPos === 1) second = i;
  }

  return second;
}

module.exports = getSecondValue;
