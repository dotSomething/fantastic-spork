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

function buildCoordinateHistory(wire1, wire2){
	wire1History = [];
	wire2History = [];

	wire1.forEach(element => {
		wire1History.push(getCoordinates(element));
	});

	wire2.forEach(element => {
		wire2History.push(getCoordinates(element));
	});

	// return wire1History;  // WORKS!!
	return [wire1History, wire2History];  // RETURN "[object], [object]"
}

module.exports = {
	calculateFuel,
	calculateCalibratedFuel,
	gravityAssist,
	initGravityAssist,
	getCoordinates,
	buildCoordinateHistory
}
