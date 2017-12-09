exports.validatePassword = password => {
  let set = new Set();
  for (let word of password.trim().split(' ')) {
    if (set.has(word)) return false;
    set.add(word);
  }
  return true;
};

exports.validatePasswordExcludingAnagrams = password => {
  let set = new Set();
  for (let word of password.trim().split(' ')) {
    const alphabetizedWord = word
      .split('')
      .sort()
      .join('');

    if (set.has(alphabetizedWord)) return false;
    set.add(alphabetizedWord);
  }
  return true;
};
