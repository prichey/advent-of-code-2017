function getTotalScoreOfGroups(input) {
  let [groupStack, garbageStack] = [[], []];
  let score = 0;
  let skip = false;

  input
    .toString()
    .trim()
    .split('')
    .map((char, i) => {
      if (!skip) {
        switch (char) {
          case '{':
            if (!garbageStack.length) groupStack.push(char);
            break;
          case '}':
            if (!garbageStack.length) {
              score += groupStack.length;
              groupStack.pop();
            }
            break;
          case '<':
            if (!garbageStack.length) garbageStack.push(char);
            break;
          case '>':
            garbageStack.pop();
            break;
          case '!':
            skip = true;
            break;
          default:
            break;
        }
      } else {
        skip = false;
      }
    });
  return score;
}

module.exports = getTotalScoreOfGroups;
