const debug = console.debug;
const assert = require('assert');

function runFuelFormula(value) {
	return Math.floor(value / 3) - 2
}

function calculateFuel(masses) {
	return masses.reduce((counter, mass) => {
		return counter + runFuelFormula(mass);
	}, 0)
}

function calculateCalibratedFuel(masses) {
	const result = [];

	function reduceFuel(mass) {
		while (runFuelFormula(mass) > 0) {
			mass = runFuelFormula(mass);
			result.push(mass);
		}
	}

	masses.forEach(element => {
		reduceFuel(element)
	});

	return result.reduce((curr, mass) => {
		return curr = curr + mass;
	});
}

function restoreState(opCodes, noun, verb) {
	opCodes[1] = noun;
	opCodes[2] = verb;

}

function gravityAssist([...opCodes], noun, verb) {
	restoreState(opCodes, noun, verb);

	for (let i = 0; i < opCodes.length; i += 4) {
		const opCode = opCodes[i];
		const position_1 = opCodes[opCodes[i + 1]];
		const position_2 = opCodes[opCodes[i + 2]];
		const outputIndex = opCodes[i + 3];

		if (opCode === 1) {
			opCodes[outputIndex] = position_1 + position_2;
		} else if (opCode === 2) {
			opCodes[outputIndex] = position_1 * position_2;
		} else if (opCode === 99) {
			return opCodes[0];
		} else {
			console.error(`Invalid code:  ${opCode}`);
			return;
		}
	}
}

function initGravityAssist(opCodes, output) {

	for (let i = 0; i < 100; i++) {

		for (let j = 0; j < 100; j++) {
			if (gravityAssist([...opCodes], i, j) == output) {
				return 100 * i + j;
			}
		}
	}
}

const getAxis = (value) => {
	let isPositive = true;
	let axis = 'unset';
	// const letter = value.toLowerCase().match(/[a-zA-Z]*/);  // Wasn't returning the letter??????
	const letter = value.split("")[0].toLowerCase();
	switch (letter) {
		case 'u':
			axis = 'y'
			isPositive = true
			break;
		case 'd':
			axis = 'y'
			isPositive = false
			break
		case 'l':
			axis = 'x'
			isPositive = false
			break
		case 'r':
			axis = 'x'
			isPositive = true
			break;
		default:
			axis === undefined
			isPositive = undefined
	}
	return [axis, isPositive];
}

function getCoordinates(value, start = { x: 0, y: 0 }) {
	let [axis, isPositive] = getAxis(value);
	const coordinates = [];

	for (let index = 1; index <= Number.parseInt(value.slice(1), 10); index++) {
		coordinates.push(Object.assign({}, start, isPositive === true ? { [axis]: index } : { [axis]: -index }));
	}

	return coordinates;
}

function buildCoordinateHistory(path) {
	history = [];

	path.forEach(element => {
		history.push(getCoordinates(element));
	});

	return history;
}

function isEqual(value1, value2) {
	// debug(value1, '<< 124 ... Wire 1 X coord');
	// debug(value2, '<< 125 ....Wire 2 x coord');
	return value1 === value2 ? true : false;
}

function getIntersections(wire1, wire2) {
	let [w1, w2] = [buildCoordinateHistory(wire1), buildCoordinateHistory(wire2)];
	intersections = [];

	// debug(w1);
	// // debug(w1[0][0]);
	// debug(buildCoordinateHistory(['R8']));
	// debug(buildCoordinateHistory(['U7']));
	// debug(w1[0][0].x);

	for (let wire_1_index = 0; wire_1_index < w1.length; wire_1_index++) {
		for (let wire_2_index = 0; wire_2_index < w2.length; wire_2_index++) {
			if (isEqual(2,2) && isEqual(2,2)) {
				intersections.push(w1[0][0]);
			} else {
				intersections.push('fail');
			}
		}
	}

	return intersections;
}

module.exports = {
	calculateFuel,
	calculateCalibratedFuel,
	gravityAssist,
	initGravityAssist,
	getCoordinates,
	buildCoordinateHistory,
	getIntersections
}
