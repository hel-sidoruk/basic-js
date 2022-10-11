const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;
const LOG_TWO = 0.693

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
  if (!sampleActivity 
    || (!(typeof sampleActivity === 'string') 
    || !(/^[0-9]*[.,]?[0-9]+$/.test(sampleActivity)))) return false
  if (Number(sampleActivity) > 15 || Number(sampleActivity) <= 0) return false
  let time = (Math.log(MODERN_ACTIVITY / Number(sampleActivity))) / (LOG_TWO / HALF_LIFE_PERIOD)
  return Math.ceil(time)
}
module.exports = {
  dateSample
};
