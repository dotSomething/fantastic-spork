// Excersie 1 - Sum all numbers in array

function arraySumWithReduce(incomingArray) {
	return incomingArray.reduce((acc, val) => {
		return acc + val
	}, 0);
}

function arraySumWithForEach(incomingArray) {
	let counter = 0;
	incomingArray.forEach(element => {
		counter = counter + element;
	});
	return counter;
}

module.exports = {
	arraySumWithReduce,
	arraySumWithForEach
}
