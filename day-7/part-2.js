const utils = require('./utils.js');

function findProperWeightOfIncorrectlyWeightedProgram(input) {
  const tower = utils.stackTower(input);
  return tower.findImproperWeight();
}

module.exports = findProperWeightOfIncorrectlyWeightedProgram;
