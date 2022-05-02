const { NotImplementedError } = require('../extensions/index.js');

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
	let arr = []
	let newStr = str
	let sum = 1
	for (let i = 0; i < newStr.length; i++) {
		for (let j = i + 1; j <= newStr.length; j++) {
			if (newStr[i] == newStr[j]) {
				sum += 1
			} else {
				sum > 1 ? arr.push(String(sum) + newStr[i]) : arr.push(newStr[i])
				newStr = newStr.substr(j, newStr.length - 1)
				sum = 1
				i = -1
				j = 1000
			}
		}
	}
	return arr.join('')
}

module.exports = {
	encodeLine
};
