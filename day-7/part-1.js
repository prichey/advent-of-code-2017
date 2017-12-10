const utils = require('./utils.js');

function getNameOfBottomProgram(input) {
  const tower = utils.stackTower(input);
  return tower.root.name;
}

module.exports = getNameOfBottomProgram;
