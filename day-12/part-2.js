const utils = require('./utils');

function countDistinctGroups(input) {
  const graph = utils.buildGraphFromInput(input);
  return utils.getNumGroups(graph);
}

module.exports = countDistinctGroups;
