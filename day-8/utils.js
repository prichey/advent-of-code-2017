function parseInstruction(str) {
  const [
    register,
    opcode,
    val,
    _,
    conditionRegister,
    conditionTest,
    conditionVal
  ] = str.split(' ');

  return {
    register: register,
    opcode: opcode,
    val: parseInt(val),
    conditionRegister: conditionRegister,
    conditionTest: conditionTest,
    conditionVal: parseInt(conditionVal)
  };
}

exports.parseInstruction = parseInstruction;
