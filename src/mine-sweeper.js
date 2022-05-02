const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(arr) {
	let pepega = []
	let popipop = []

	let sum = 0
	for (let i = 0; i < arr.length; i++) {
		popipop = []
		for (let j = 0; j < arr[i].length; j++) {

			sum = 0
			for (let h = i - 1; h <= i + 1; h++) {
				for (let w = j - 1; w <= j + 1; w++) {
					if (h >= 0 && w >= 0 && h < arr.length && w < arr[i].length) {
						if (arr[h][w] === true) {
							sum += 1
						}
					}
				}
			}
			if (arr[i][j] === true) sum = sum - 1
			popipop.push(sum)
		}
		pepega.push(popipop)
	}
	return pepega
}

module.exports = {
	minesweeper
};
