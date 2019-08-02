// Exercise 2 - Return the array as a string


function turnArrayIntoStringWithReduce(incomingArray) {
	const convertedArray = incomingArray.reduce((acc, val) => {
		if (val) {
			return acc + `${val}`;
		}
	});
	return convertedArray;
}

module.exports = {
	turnArrayIntoStringWithReduce
}
