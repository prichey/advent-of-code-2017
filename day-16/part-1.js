const utils = require('./utils');

function getOrderOfProgramsAfterOneDanceIteration(input, numPrograms = 16) {
  const instructions = utils.getInstructionsFromInput(input);
  return utils.getOrderOfProgramsAfterDance(instructions, numPrograms, 1);
}

module.exports = getOrderOfProgramsAfterOneDanceIteration;
