const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  length: 0,
  chain: null,
  getLength() {
    return this.length
  },
  addLink(value) {
    if (!this.chain) this.chain = []
    this.chain.push(value)
    this.length++
    return chainMaker
  },
  removeLink(position) {
    if (!position 
      || typeof position !== 'number' 
      || !Number.isInteger(position) 
      || position < 1 
      || !(this.chain[position - 1])) {
      throw new Error('You can\'t remove incorrect link!')
    }
    this.chain.splice(position - 1, 1)
    return chainMaker
  },
  reverseChain() {
    if (!this.chain) this.chain = []
    this.chain.reverse()
    return chainMaker
  },
  finishChain() {
    let finishedChain = this.chain.map(el => `( ${el} )`).join('~~')
    this.chain = null;
    this.length = 0
    return finishedChain
  },
};

module.exports = {
  chainMaker
};
