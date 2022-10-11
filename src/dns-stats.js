const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  if (!domains.length) return {}
  let dns = {}
  for (let elem of domains) {
    let splitted = elem.split('.')
    let string = ``
    for (let i = splitted.length - 1; i > -1; i--) {
      string += `.${splitted[i]}`
      if (!Object.keys(dns).includes(string)) dns[string] = 0
    }
  }
  for (let domain of domains) {
    for (let key of Object.keys(dns)) {
      if (key.split('.').every(elem => domain.includes(elem))) {
        dns[key] += 1
      }
    }
  }
  return dns
}

module.exports = {
  getDNSStats
};
