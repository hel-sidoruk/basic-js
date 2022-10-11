const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let encodedString= ''
  for (let i = 0; i < str.length; i++) {
    let sum = 1
    let char = str[i] 
    while (str[i + 1] === char) {
      sum++
      i++
    }
    encodedString += `${sum > 1 ? sum : ''}${char}`
  }
  return encodedString
}

module.exports = {
  encodeLine
};