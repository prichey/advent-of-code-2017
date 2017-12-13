const utils = require('./utils');

function countProgramsInGroup(input) {
  const graph = utils.buildGraphFromInput(input);
  const group = utils.getNodeGroup(0, graph);
  return group.length;
}

module.exports = countProgramsInGroup;
