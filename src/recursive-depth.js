const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(arr) {
    let depth = 1
    let max = []
    if (arr.some(el => Array.isArray(el))) {
      for (let elem of arr) {
        if (Array.isArray(elem)) {
          let elemDepth = this.calculateDepth(elem)
          max.push(elemDepth)
        }
      }
      return depth + Math.max(...max) 
    } else {
      return depth
    }
  }
}
module.exports = {
  DepthCalculator
};
