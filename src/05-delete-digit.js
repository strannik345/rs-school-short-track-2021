/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const arr = [];
  let copy;
  for (let i = 0; i < String(n).length; i++) {
    copy = String(n).split('');
    copy[i] = '';
    arr.push(Number(copy.join('')));
  }
  arr.sort((a, b) => a - b);
  return arr[arr.length - 1];
}

module.exports = deleteDigit;
