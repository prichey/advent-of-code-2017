const [multiplierA, multiplierB, divisorBoth] = [16807, 48271, 2147483647];

function getStartValFromStr(str) {
  const strSplit = str.trim().split(' starts with ');
  return parseInt(strSplit[1]);
}

function getGeneratorsStartingValsFromInput(input) {
  const [genAStr, genBStr] = input
    .toString()
    .trim()
    .split('\n');

  return [getStartValFromStr(genAStr), getStartValFromStr(genBStr)];
}

function getNextGeneratorVal(val, multiplier, divisor) {
  return (val * multiplier) % divisor;
}

function getNextGenAVal(val) {
  return getNextGeneratorVal(val, multiplierA, divisorBoth);
}

function getNextGenBVal(val) {
  return getNextGeneratorVal(val, multiplierB, divisorBoth);
}

function getNextGenAValWithCriteriaModulo(val, modulo = 4) {
  val = getNextGeneratorVal(val, multiplierA, divisorBoth);
  while (val % modulo !== 0)
    val = getNextGeneratorVal(val, multiplierA, divisorBoth);
  return val;
}

function getNextGenBValWithCriteriaModulo(val, modulo = 8) {
  val = getNextGeneratorVal(val, multiplierB, divisorBoth);
  while (val % modulo !== 0)
    val = getNextGeneratorVal(val, multiplierB, divisorBoth);
  return val;
}

function decStrToBin(dec) {
  return parseInt(dec, 10).toString(2);
}

function reverseStr(str) {
  return str
    .toString()
    .trim()
    .split('')
    .reverse()
    .join('');
}

function lower16BitsMatch(binA, binB) {
  return binA.slice(-16) === binB.slice(-16);
}

exports.getGeneratorsStartingValsFromInput = getGeneratorsStartingValsFromInput;
exports.getNextGenAVal = getNextGenAVal;
exports.getNextGenBVal = getNextGenBVal;
exports.decStrToBin = decStrToBin;
exports.lower16BitsMatch = lower16BitsMatch;
exports.getNextGenAValWithCriteriaModulo = getNextGenAValWithCriteriaModulo;
exports.getNextGenBValWithCriteriaModulo = getNextGenBValWithCriteriaModulo;
