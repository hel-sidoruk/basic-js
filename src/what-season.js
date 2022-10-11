const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(date) {
  if (!date) return 'Unable to determine the time of year!'
  if (!(date instanceof Date)) throw new Error('Invalid date!')
  try {
    date.toISOString()
    const month = date.getMonth()
    const seasons = {
      'winter': [11, 0, 1],
      'spring': [2, 3, 4],
      'summer': [5, 6, 7],
      'fall': [8, 9, 10]
    }
    for (const season of Object.keys(seasons)) {
      if (seasons[season].includes(month)) return season
    }
  } catch (err) {
    throw new Error('Invalid date!') 
  }
}
module.exports = {
  getSeason
};
