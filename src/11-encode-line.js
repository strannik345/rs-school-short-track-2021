/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  if (str.length === 0) return '';
  const arr = [[str[0]]];
  let j = 0;
  let encoded = '';
  for (let i = 1; i < str.length; i++) {
    if (str[i] === arr[j][0]) arr[j].push(str[i]);
    else {
      j++;
      arr[j] = [];
      arr[j].push(str[i]);
    }
  }
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length === 1) encoded += `${arr[i][0]}`;
    else encoded += `${arr[i].length}${arr[i][0]}`;
  }
  return encoded;
}

module.exports = encodeLine;
