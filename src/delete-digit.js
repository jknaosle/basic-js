const { NotImplementedError } = require('../extensions/index.js');

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
 function deleteDigit(number) {
	let sum = 0
	let string = String(number)
	for (let i = 0; i < string.length; i++) {
		if (i == 0) {
			if (sum < Number(string.substr(1, string.length - 1))) {
				sum = Number(string.substr(1, string.length - 1))

			}
		} else {
			if (sum < Number(string.substr(0, i) + string.substr(i + 1, string.length - 1))) {
				sum = Number(string.substr(0, i) + string.substr(i + 1, string.length - 1))

			}
		}
	}
	return sum
}

module.exports = {
  deleteDigit
};
