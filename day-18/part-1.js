const utils = require('./utils');

function findRecoveredFrequency(input) {
  function getVal(val) {
    return isNaN(val) ? registers.get(val) || 0 : parseInt(val);
  }

  const registers = new Map();
  const ops = utils.getOpsFromInput(input);

  let sound = null;
  let curPos = 0;

  while (curPos >= 0 && curPos < ops.length) {
    const op = ops[curPos];

    switch (op.code) {
      case 'snd':
        sound = getVal(op.reg);
        break;
      case 'set':
        registers.set(op.reg, getVal(op.val));
        break;
      case 'add':
        registers.set(op.reg, getVal(op.reg) + getVal(op.val));
        break;
      case 'mul':
        registers.set(op.reg, getVal(op.reg) * getVal(op.val));
        break;
      case 'mod':
        registers.set(op.reg, getVal(op.reg) % getVal(op.val));
        break;
      case 'rcv':
        if (getVal(op.reg) > 0) return sound;
        break;
      case 'jgz':
        curPos += getVal(op.reg) > 0 ? getVal(op.val) : 1;
        break;
    }

    if (op.code !== 'jgz') curPos++; // don't increment if jumping
  }

  return null;
}

module.exports = findRecoveredFrequency;
