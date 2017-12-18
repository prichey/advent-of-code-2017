const utils = require('./utils');

function getOrderOfProgramsAfterOneBillionDanceIterations(
  input,
  numPrograms = 16
) {
  const instructions = utils.getInstructionsFromInput(input);
  return utils.getOrderOfProgramsAfterDance(
    instructions,
    numPrograms,
    1000000000
  );
}

module.exports = getOrderOfProgramsAfterOneBillionDanceIterations;
