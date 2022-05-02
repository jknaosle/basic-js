const { NotImplementedError } = require('../extensions/index.js');

/**
 * Calculate turns number and time (in seconds) required
 * to solve puzzle
 * 
 * @param {Number} disks number of disks
 * @param {Number} turnsSpeed speed (in turns/hour)
 * @return {Object} object with props turns (number of turns)
 * and seconds (time in seconds)
 *
 * @example
 * 
 * calculateHanoi(9, 4308) => { turns: 511, seconds: 427 }
 *
 */
function calculateHanoi(discNumber, turnsSpeed) {
	let resultObj = {}
	let arr = [1, 3]
	for (let i = 2; i < discNumber; i++) {
		arr[i] = arr[i - 1] * 2 + 1
	}
	resultObj.turns = arr[discNumber - 1]
	resultObj.seconds = Math.floor(3600 / turnsSpeed * arr[discNumber - 1])
	return resultObj
}


module.exports = {
	calculateHanoi
};
