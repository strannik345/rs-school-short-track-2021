/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  if (names.length === 0) return [];
  const arr = [names[0]];
  for (let i = 1; i < names.length; i++) {
    if (names.slice(0, i).includes(names[i])) {
      arr.push(`${names[i]}(${names.slice(0, i).filter((e) => e === names[i]).length})`);
    } else {
      arr.push(names[i]);
    }
  }
  for (let i = 0; i < arr.length; i++) {
    if (arr.filter((e) => e === arr[i]).length !== 1) {
      return renameFiles(arr);
    }
  }
  return arr;
}

module.exports = renameFiles;
