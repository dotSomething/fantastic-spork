function calculateFuel(masses) {
	return masses.reduce((counter, mass) => {
		return counter + (Math.floor(mass / 3 - 2));
	}, 0)
}

function reset(array) {
	let code = 0;

	if (array[code] !== 1 && array[code] !== 2 && array[code] !== 99) {
		console.error(`${array[code]} is not a recognized opcode.`)
	}
	if (array[code] === 1) {
		array.splice(array[3], 1, array[array[1]] + array[array[2]]);
		code = 4;
		reset(array);
	}
	if (array[code] === 2) {
		originalArray.splice(originalArray[3], 1, originalArray[originalArray[1]] * originalArray[originalArray[2]]);
		code = 4;
		reset(array);
	}
	if (array[code] === 99) {
		return
	}

	console.log(array);
}

module.exports = {
	calculateFuel,
	reset
}
