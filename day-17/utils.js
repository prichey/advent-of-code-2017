function insertAfterPos(val, array, pos) {
  const first = array.slice(0, pos + 1);
  const middle = [val];
  const last = array.slice(pos + 1);
  return first.concat(middle).concat(last);
}

exports.insertAfterPos = insertAfterPos;
