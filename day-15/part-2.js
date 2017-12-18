const utils = require('./utils');

function findJudgesFinalCountAfterNumRounds(input, numRounds = 5000000) {
  let [valA, valB] = utils.getGeneratorsStartingValsFromInput(input);
  let matchCount = 0;

  for (let i = 0; i < numRounds; i++) {
    [valA, valB] = [
      utils.getNextGenAValWithCriteriaModulo(valA),
      utils.getNextGenBValWithCriteriaModulo(valB)
    ];
    const [binA, binB] = [utils.decStrToBin(valA), utils.decStrToBin(valB)];
    if (utils.lower16BitsMatch(binA, binB)) matchCount++;
  }
  return matchCount;
}

module.exports = findJudgesFinalCountAfterNumRounds;
