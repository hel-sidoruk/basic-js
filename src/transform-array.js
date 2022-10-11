const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if (!(Array.isArray(arr))) throw new Error("'arr' parameter must be an instance of the Array!")
  if (!arr.length) return []
  let functionNames = ['--discard-next', '--double-next', '--discard-prev', '--double-prev']
  if (arr.every(el => !functionNames.includes(el))) return arr
  let arrCopy = [...arr]
  let newArr = []
  for (let i = 0; i < arrCopy.length; i++) {
    if (functionNames.includes(arrCopy[i])) {
      switch (arrCopy[i]) {
        case '--discard-next': {
          newArr.push(undefined)
          i++ 
          break
        }
        case '--double-next': {
          if (!arr[i + 1]) break
          newArr.push(arr[i + 1])
          newArr.push(arr[i + 1])
          i++
          break
        }
        case '--discard-prev': {
          newArr.pop()
          break
        }
        case '--double-prev': {
          if (!newArr.length || !newArr[newArr.length - 1]) break
          newArr.push(newArr[newArr.length - 1])
          break
        }
      }
    } else {
      newArr.push(arrCopy[i])
    }
  }
  return newArr.filter(Boolean)

  // --discard-next excludes the next element of the array from the transformed array.
  // --discard-prev excludes the previous element of the array from the transformed array.
  // --double-next duplicates the next element of the array in the transformed array.
  // --double-prev duplicates the previous element of the array in the transformed array.
}
console.log(transform([1, 2, 3, '--discard-next', 1337, '--double-prev', 4, 5])) //[1, 2, 3, 1337, 4, 5]
// doubleDiscarded: {
//   console.log(transform([1, 2, 3, '--discard-next', 1337, '--double-prev', 4, 5]))
//   // output: [1, 2, 3, 4, 5]
// // doubleDoubled: {
//   console.log(transform([1, 2, 3, '--double-next', 1337, '--double-prev', 4, 5]))
//   // output: [1, 2, 3, 1337, 1337, 1337, 4, 5]
// // discardDiscarded: {
//   console.log(transform([1, 2, 3, '--discard-next', 1337, '--discard-prev', 4, 5]))
//   // output: [1, 2, 3, 4, 5]
// // discardDoubled: {
//   console.log(transform([1, 2, 3, '--double-next', 1337, '--discard-prev', 4, 5]))
//  output: [1, 2, 3, 1337, 4, 5]
module.exports = {
  transform
};
