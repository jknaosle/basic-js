const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(number) {
	let string = number
	let result = 0

	function pepegaSummoner(string) {
		result = 0
		for (let i = 0; i < String(string).length; i++) {
			result += Number(String(string)[i])
		}
		return result
	}
	if (String(string).length > 1) {
		pepegaSummoner(string)

		if (String(result).length > 1) {
			pepegaSummoner(result)
		}
		return result

	}
	return result
}

module.exports = {
	getSumOfDigits
};
