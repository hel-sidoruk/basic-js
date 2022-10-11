const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let string = String(str)
  let newString = '';
  let additionStr = '';
  if (options.hasOwnProperty('addition')) {
    let stringAddition = String(options.addition)
    if (!options.additionRepeatTimes || options.additionRepeatTimes === 1) {
      additionStr = stringAddition
    } else {
      for (let i = 1; i < options.additionRepeatTimes; i++) {
        additionStr += stringAddition + (options.additionSeparator || '|')
      }
      additionStr += stringAddition
    }
  }
  if (!options.repeatTimes) return string + additionStr
  for (let i = 1; i < options.repeatTimes; i++) {
    newString += string + additionStr + (options.separator || '+')
  }
  return newString + string + additionStr
}
module.exports = {
  repeater
};
