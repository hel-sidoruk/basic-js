const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  constructor(direct) {
    this.direct = direct === undefined ? true : direct
  }
  getCharsArray(string, keyword) {
    let str = string.toUpperCase()
    let key = keyword.toUpperCase()
    let charsArray = []
    let notLetters = 0
    let reg = /[a-z]/i
    for (let i = 0; i < str.length; i++) {
      if (reg.test(str[i])) {
        charsArray.push([str[i].charCodeAt(0) - 65, key[(i - notLetters) % key.length].charCodeAt(0) - 65])
      } else {
        charsArray.push(str[i])
        notLetters++
      }
    } 
    return charsArray
  }
  encrypt(string, keyword) {
    if (!string || !keyword) throw new Error('Incorrect arguments!')
    let charsArray = this.getCharsArray(string, keyword)
    let encryptedCodes = charsArray.map(el => typeof el === 'string' ? el.charCodeAt(0) : ((el[0] + el[1]) % 26) + 65)
    let encryptedMessage = this.direct 
    ? String.fromCharCode(...encryptedCodes) 
    : String.fromCharCode(...encryptedCodes).split('').reverse().join('')
    console.log(encryptedMessage)
    return encryptedMessage
  }
  decrypt(encryptedMessage, keyword) {
    if (!encryptedMessage || !keyword) throw new Error('Incorrect arguments!')
    let charsArray = this.getCharsArray(encryptedMessage, keyword)
    let decrypteCodes = charsArray.map(el => typeof el === 'string' ? el.charCodeAt(0) : ((el[0] - el[1] + 26) % 26) + 65)
    let decryptedMessage = this.direct 
    ? String.fromCharCode(...decrypteCodes) 
    : String.fromCharCode(...decrypteCodes).split('').reverse().join('')
    console.log(decryptedMessage)
    return decryptedMessage
  }
}

module.exports = {
  VigenereCipheringMachine
};
