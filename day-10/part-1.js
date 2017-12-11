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

function convolveList(input, length = 256) {
  let list = getInitialList(length);
  let pointerIndex = 0;
  input
    .toString()
    .trim()
    .split(',')
    .map((inputStr, index) => {
      const input = parseInt(inputStr);

      const sublist = getSublist(list, pointerIndex, input);
      sublist.reverse();
      list = mergeLists(list, sublist, pointerIndex);
      pointerIndex = (pointerIndex + input + index) % list.length;
    });
  return list;
}

function getProductOfFirstTwoNumbers(input, length = 256) {
  const convolvedList = convolveList(input, length);
  return convolvedList[0] * convolvedList[1];
}

module.exports = getProductOfFirstTwoNumbers;
