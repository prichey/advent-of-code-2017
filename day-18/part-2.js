const utils = require('./utils');

function makeInterpreter(ops, pid, sendFn, receiveFn) {
  // http://markheath.net/post/advent-of-code-2017-day-18 was very helpful in refactoring

  function getVal(val) {
    return isNaN(val) ? registers.get(val) || 0 : parseInt(val);
  }

  const registers = new Map();
  let sound = null;
  let curPos = 0;
  let blocked = false;

  registers.set('p', pid);

  function runOp(op) {
    switch (op.code) {
      case 'snd':
        sendFn(getVal(op.reg));
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
        const val = receiveFn();
        if (!!val) {
          registers.set(op.reg, val);
          blocked = false;
        } else {
          // no val, program is blocked
          blocked = true;
        }
        break;
      case 'jgz':
        curPos += getVal(op.reg) > 0 ? getVal(op.val) : 1;
        break;
    }
  }

  function execute() {
    const op = ops[curPos];
    runOp(op);
    if (!blocked && op.code !== 'jgz') curPos++;
    if (curPos < 0 || curPos >= ops.length)
      throw new Error('out of bounds, terminating');
    return blocked;
  }

  return { execute };
}

function runUntilBlocked(interpreter) {
  while (!interpreter.execute()) {}
}

function countProgramOneSends(input) {
  const ops = utils.getOpsFromInput(input);

  let totalSent = 0;
  const sent0 = [];
  const sent1 = [];

  const p0 = makeInterpreter(
    ops,
    0,
    sendVal => sent0.push(sendVal),
    () => sent1.shift()
  );

  const p1 = makeInterpreter(
    ops,
    1,
    sendVal => {
      sent1.push(sendVal);
      totalSent++;
    },
    () => sent0.shift()
  );

  do {
    runUntilBlocked(p0);
    runUntilBlocked(p1);
  } while (sent0.length > 0 || sent1.length > 0);
  return totalSent;
}

module.exports = countProgramOneSends;
