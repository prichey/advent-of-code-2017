function getOpsFromInput(input) {
  const ops = [];

  input
    .toString()
    .trim()
    .split('\n')
    .map(opStr => {
      const split = opStr.split(' ');
      const [opcode, args] = [split[0], split.slice(1)];

      const op = {
        code: opcode,
        reg: args[0]
      };

      switch (opcode) {
        case 'snd':
          ops.push(op);
          break;
        case 'set':
          op.val = isNaN(parseInt(args[1])) ? args[1] : parseInt(args[1]);
          ops.push(op);
          break;
        case 'add':
          op.val = isNaN(parseInt(args[1])) ? args[1] : parseInt(args[1]);
          ops.push(op);
          break;
        case 'mul':
          op.val = isNaN(parseInt(args[1])) ? args[1] : parseInt(args[1]);
          ops.push(op);
          break;
        case 'mod':
          op.val = isNaN(parseInt(args[1])) ? args[1] : parseInt(args[1]);
          ops.push(op);
          break;
        case 'rcv':
          ops.push(op);
          break;
        case 'jgz':
          op.val = isNaN(parseInt(args[1])) ? args[1] : parseInt(args[1]);
          ops.push(op);
          break;
      }
    });

  return ops;
}

function isReg(val) {
  return Number.isInteger(val) !== true;
}

function touchRegister(reg, registers) {
  if (reg in registers !== true) {
    registers[reg] = 0;
  }
  return registers;
}

exports.getOpsFromInput = getOpsFromInput;
exports.isReg = isReg;
exports.touchRegister = touchRegister;
