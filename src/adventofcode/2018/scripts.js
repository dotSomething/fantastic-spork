const _ = require('lodash');

function lodashFrequency(incomingArray) {
	return _.reduce(incomingArray, function (element, n) {
		return element + n;
	}, 0)
}

function reduceFrequency(incomingArray) {
	return incomingArray.reduce((acc, val) => {
		return acc + val;
	}, 0)
}

module.exports = {
	lodashFrequency,
	reduceFrequency
}
