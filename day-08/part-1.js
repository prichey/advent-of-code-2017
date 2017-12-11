const utils = require('./utils');

function largestValue(registers) {
  if (Object.keys(registers).length === 0) return null;

  let val = Object.values(registers)[0];
  for (let register in registers) {
    if (registers[register] > val) {
      val = registers[register];
    }
  }
  return val;
}

function getLargestRegisterValue(input) {
  const instructions = input
    .toString()
    .trim()
    .split('\n');

  let registers = {};
  instructions.map(instructionStr => {
    const ins = utils.parseInstruction(instructionStr);

    if (ins.register in registers !== true) {
      registers[ins.register] = 0;
    }

    if (ins.conditionRegister in registers !== true) {
      registers[ins.conditionRegister] = 0;
    }

    // not sure how to do this without eval but I feel dirty
    eval(`${ins.conditionRegister} = ${registers[ins.conditionRegister]}`);

    if (
      eval(`${ins.conditionRegister} ${ins.conditionTest} ${ins.conditionVal}`)
    ) {
      if (ins.opcode === 'inc') {
        registers[ins.register] += ins.val;
      } else if (ins.opcode === 'dec') {
        registers[ins.register] -= ins.val;
      } else {
        throw new Error('unknown opcode');
      }
    }
  });

  return largestValue(registers);
}

module.exports = getLargestRegisterValue;
