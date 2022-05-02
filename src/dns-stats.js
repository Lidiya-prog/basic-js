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
  let objAppearance = {}
  
  domains.forEach( domain => {
    for (let i = 0; i < domain.split('.').length; i++) {
      let res = '.' + domain.split('.').slice(i).reverse().join('.');
      [res] in objAppearance ? objAppearance[res]++ : (objAppearance[res] = 1)
    }
  })

  return objAppearance

}

module.exports = {
  getDNSStats
};
