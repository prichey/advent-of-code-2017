const utils = require('./utils');

function getValueAfterTheLast(input) {
  const offset = parseInt(input);

  let buffer = [0];
  let curPos = 0;

  for (let i = 1; i <= 2017; i++) {
    curPos = (curPos + offset) % buffer.length;
    buffer = utils.insertAfterPos(i, buffer, curPos);
    curPos = (curPos + 1) % buffer.length;
  }

  curPos = (curPos + 1) % buffer.length;

  return buffer[curPos];
}

module.exports = getValueAfterTheLast;
