const utils = require('./utils');

function getLargestEverRegisterValue(input) {
  const instructions = input
    .toString()
    .trim()
    .split('\n');

  let largestValue = 0;

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

    if (registers[ins.register] > largestValue)
      largestValue = registers[ins.register];
  });

  return largestValue;
}

module.exports = getLargestEverRegisterValue;
