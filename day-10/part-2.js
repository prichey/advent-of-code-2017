function mergeLists(list, sublist, startIndex) {
  for (let i = 0; i < sublist.length; i++) {
    list[(startIndex + i) % list.length] = sublist[i];
  }
  return list;
}

function getSublist(list, startIndex, length) {
  const subList = [];
  for (let i = 0; i < length; i++) {
    subList.push(list[(i + startIndex) % list.length]);
  }
  return subList;
}

function getInitialList(length) {
  const list = [];
  for (let i = 0; i < length; i++) {
    list.push(i);
  }
  return list;
}

function convolveList(list, inputs, pointerIndex, skipSize) {
  inputs.map(input => {
    const sublist = getSublist(list, pointerIndex, input);
    sublist.reverse();
    list = mergeLists(list, sublist, pointerIndex);
    pointerIndex = (pointerIndex + input + skipSize++) % list.length;
  });
  return [list, pointerIndex, skipSize];
}

function convolveListMultipleTimes(input, length, times) {
  let inputs = input
    .toString()
    .trim()
    .split('')
    .map(char => char.charCodeAt(0));
  inputs = inputs.concat([17, 31, 73, 47, 23]);

  let list = getInitialList(length);
  let pointerIndex = 0;
  let skipSize = 0;

  for (let i = 0; i < times; i++) {
    [list, pointerIndex, skipSize] = convolveList(
      list,
      inputs,
      pointerIndex,
      skipSize
    );
  }
  return list;
}

function xorBlock(block) {
  return block.reduce((val, current) => val ^ current);
}

function getDenseHash(sparseHash) {
  const denseHash = [];
  const segments = 16;
  const numBlocks = sparseHash.length / segments;

  for (let i = 0; i < numBlocks; i++) {
    const block = sparseHash.slice(numBlocks * i, numBlocks * (i + 1));
    const xoredBlock = xorBlock(block);
    denseHash.push(xoredBlock);
  }

  return denseHash;
}

function findKnotHash(input, length = 256) {
  const convolvedList = convolveListMultipleTimes(input, length, 64);
  const denseHash = getDenseHash(convolvedList);

  return denseHash.reduce(
    (knotHash, current) => (knotHash += current.toString(16).padStart(2, '0')),
    ''
  );
}

module.exports = findKnotHash;
