/**
 * Given an email address, return it's domain.
 *
 * @param {String} email
 * @return {String}
 *
 * @example
 * For the input 'prettyandsimple@example.com', the output should be 'example.com'
 *
 */
function getEmailDomain(email) {
  let index;
  for (let i = email.length - 1; i--; i >= 0) {
    if (email[i] === '@') {
      index = i + 1;
      break;
    }
  }
  return email.slice(index);
}

module.exports = getEmailDomain;
