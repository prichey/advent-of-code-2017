function getNumGarbageCharacters(input) {
  let [groupStack, garbageStack] = [[], []];
  let garbageChars = 0;
  let skip = false;

  input
    .toString()
    .trim()
    .split('')
    .map((char, i) => {
      if (!skip) {
        switch (char) {
          case '{':
            if (!garbageStack.length) {
              groupStack.push(char);
            } else {
              garbageChars++;
            }
            break;
          case '}':
            if (!garbageStack.length) {
              groupStack.pop();
            } else {
              garbageChars++;
            }
            break;
          case '<':
            if (!garbageStack.length) {
              garbageStack.push(char);
            } else {
              garbageChars++;
            }
            break;
          case '>':
            garbageStack.pop();
            break;
          case '!':
            skip = true;
            break;
          default:
            if (garbageStack.length) {
              garbageChars++;
            }
            break;
        }
      } else {
        skip = false;
      }
    });
  return garbageChars;
}

module.exports = getNumGarbageCharacters;
