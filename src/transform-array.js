const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
	try {
		if (!Array.isArray(arr)) {
			throw new Error('\'arr\' parameter must be an instance of the Array!');
		}
		let resultArr = []
		for (let i = 0; i < arr.length; i++) {
			if (typeof (arr[i]) === 'number') {
				resultArr.push(arr[i])
			}
			if (arr[i] == '--discard-next') i += 2
			if (arr[i] == '--discard-prev') resultArr.pop()
			if (arr[i] == '--double-next') resultArr.push(arr[i + 1])
			if (arr[i] == '--double-prev') resultArr.push(resultArr[resultArr.length - 1])
		}
		return resultArr
	} catch (e) {

	}
}

console.log(transform(3))
console.log(transform(3.312312))
console.log(transform(false))
console.log(transform(null))
console.log(transform(undefined))
console.log(transform({ 'foo': 'bar' }))

module.exports = {
	transform
};
