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
  const list = {};
  for (let i = 0; i < domains.length; i++) {
    const current = domains[i].split('.').reverse().map((e) => `.${e}`);
    for (let j = 0; j < current.length; j++) {
      let domain = '';
      for (let k = 0; k <= j; k++) {
        domain += current[k];
      }
      if (!list[domain]) list[domain] = 1;
      else list[domain]++;
    }
  }
  return list;
}

module.exports = getDNSStats;
