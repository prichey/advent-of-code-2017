const utils = require('./utils.js');

function findProperWeightOfIncorrectlyWeightedProgram(input) {
  const tower = utils.stackTower(input);
  return tower.findProperWeightOfIncorrectlyWeightedProgram();
}

module.exports = findProperWeightOfIncorrectlyWeightedProgram;
