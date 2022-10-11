const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(num) {
  let stringNum = String(num)
  let arr = []
  for (let char of stringNum) {
    arr.push(Number(stringNum.replace(char, '')))
  }
  return Math.max(...arr)
}

module.exports = {
  deleteDigit
};
