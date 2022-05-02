const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
function getSeason(dota) {
	if (!arguments.length) return 'Unable to determine the time of year!'
	try {	
		if (!(dota instanceof Date)){
			throw new Error ("Invalid date!")
		}	
		let dotaNew = dota
		if (dota.getFullYear() < 1970) {
			dotaNew = new Date(dota.getMilliseconds())
		}
		if (typeof (dotaNew) === 'object' && dotaNew.getMonth()) {

			let winter = [0, 11, 1]
			let spring = [2, 3, 4]
			let summer = [5, 6, 7]
			let autumn = [8, 9, 10]
			if (winter.includes(dotaNew.getMonth())) return 'winter'
			if (spring.includes(dotaNew.getMonth())) return 'spring'
			if (summer.includes(dotaNew.getMonth())) return 'summer'
			if (autumn.includes(dotaNew.getMonth())) return 'autumn'
		}
	} catch (err) {

		return "Invalid date!"

	}

}

console.log((new Date(80, 2, 24, 22, 13, 47, 69)).getFullYear())
let pepega = new Date(80, 2, 24, 22, 13, 47, 69)
console.log(Object.getOwnPropertyNames(pepega));
module.exports = {
	getSeason
};
