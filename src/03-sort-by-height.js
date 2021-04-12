// /**
//  * Given an array with heights, sort them except if the value is -1.
//  *
//  * @param {Array} arr
//  * @return {Array}
//  *
//  * @example
//  * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
//  *
//  * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
//  */
function sortByHeight(arr) {
  const newArr = [];
  const arrCopy = arr;
  for (let i = 0; i < arrCopy.length; i++) {
    if (arrCopy[i] !== -1) {
      newArr.push(arrCopy[i]);
      arrCopy[i] = null;
    }
  }
  newArr.sort((a, b) => a - b);
  let j = 0;
  for (let i = 0; i < arrCopy.length; i++) {
    if (arrCopy[i] === null) {
      arrCopy[i] = newArr[j];
      j++;
    }
  }
  return arrCopy;
}

module.exports = sortByHeight;
