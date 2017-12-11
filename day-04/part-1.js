const utils = require('./utils');

function countValidPasswords(passwords) {
  return passwords
    .trim()
    .split('\n')
    .reduce(
      (validPasswords, password) =>
        utils.validatePassword(password) ? validPasswords + 1 : validPasswords,
      0
    );
}

module.exports = countValidPasswords;
