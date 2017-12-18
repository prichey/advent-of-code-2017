const alphabet = 'abcdefghijklmnopqrstuvwxyz';

function getOrderOfProgramsAfterDance(
  instructions,
  numPrograms,
  numIterations
) {
  const originalOrder = alphabet.split('').slice(0, numPrograms);
  let state = cloneArray(originalOrder);
  const cache = new Map();

  let inCycle = false;
  let cycleStartKey = (cycleStartIndex = null);

  for (let i = 0; i < numIterations; i++) {
    instructions.map(op => {
      const cacheKey = JSON.stringify({
        op: op,
        state: state.join('')
      });

      if (cache.has(cacheKey)) {
        state = cache.get(cacheKey).split('');
        if (inCycle === false) {
          [cycleStartKey, cycleStartIndex] = [cacheKey, i];
          inCycle = true;
        } else {
          if (cacheKey === cycleStartKey) {
            const cycleLength = i - cycleStartIndex; // found cycle, get rid of unnecessary iterations
            const remainingIterations = (numIterations - i) % cycleLength;
            i = numIterations - remainingIterations;
          }
        }
      } else {
        const opcode = op.code;
        switch (opcode) {
          case 's':
            const subArray = state.slice(-1 * op.length);
            const restArray = state.slice(0, numPrograms - op.length);

            state = subArray.concat(restArray);
            break;
          case 'x':
            [state[op.posA], state[op.posB]] = [state[op.posB], state[op.posA]];
            break;
          case 'p':
            const [posA, posB] = [
              state.indexOf(op.charA),
              state.indexOf(op.charB)
            ];
            [state[posA], state[posB]] = [state[posB], state[posA]];
            break;
        }

        cache.set(cacheKey, state.join(''));
      }
    });
  }

  return state.join('');
}

function getInstructionsFromInput(input) {
  const instructions = [];

  input
    .toString()
    .trim()
    .split(',')
    .map(instructionStr => {
      const [opcode, params] = [
        instructionStr[0],
        instructionStr.substring(1, instructionStr.length)
      ];

      switch (opcode) {
        case 's':
          // spin
          instructions.push({
            code: opcode,
            length: parseInt(params)
          });
          break;
        case 'x':
          // swap by position
          const [posA, posB] = params.split('/').map(char => parseInt(char));
          instructions.push({
            code: opcode,
            posA: posA,
            posB: posB
          });
          break;
        case 'p':
          // swap by name
          const [charA, charB] = params
            .split('/')
            .map(char => char.toLowerCase());

          instructions.push({
            code: opcode,
            charA: charA,
            charB: charB
          });
          break;
      }
    });

  return instructions;
}

function cloneArray(array) {
  return JSON.parse(JSON.stringify(array));
}

exports.cloneArray = cloneArray;
exports.getInstructionsFromInput = getInstructionsFromInput;
exports.getOrderOfProgramsAfterDance = getOrderOfProgramsAfterDance;
