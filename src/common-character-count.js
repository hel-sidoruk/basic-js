const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  let arrFromS1 = s1.split('')
  let arrFromS2 = s2.split('')
  let sum = 0
  for (char of arrFromS1) {
    if (arrFromS2.includes(char)) {
      sum++
      arrFromS2.splice(arrFromS2.indexOf(char), 1)
    }
  }
  return sum
}

module.exports = {
  getCommonCharacterCount
};
