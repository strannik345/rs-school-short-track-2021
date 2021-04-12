/**
 * Given a sorted array, find the index of the element with the given value.
 * Time complexity should be O(logN)
 *
 * @param {Array} array
 * @param {Number} value
 * @return {Number}
 *
 * @example
 * For ([1, 2, 3], 1) should return 0
 * For ([1, 2, 3], 2) should return 1
 *
 */
function findIndex(array, value, prevIndexLeft = 0, prevIndexRight = array.length) {
  const currentIndex = Math.floor((prevIndexRight + prevIndexLeft) / 2);
  if (array[currentIndex] < value) return findIndex(array, value, currentIndex, prevIndexRight);
  if (array[currentIndex] > value) return findIndex(array, value, prevIndexLeft, currentIndex);
  return currentIndex;
}

module.exports = findIndex;
