const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
	pepega: [],
	getLength() {
		return this.pepega.length
	},
	addLink(val) {
		this.pepega.push(`( ${String(val)} )`)
		return this

	},
	removeLink(pos) {
		this.pepega.splice(pos - 1, 1)
		return this
	},
	reverseChain() {
		this.pepega.reverse()
		return this
	},
	finishChain() {
		let arr = this.pepega
		this.pepega = []
		return (arr.join('~~'))

	}
};

module.exports = {
	chainMaker
};
