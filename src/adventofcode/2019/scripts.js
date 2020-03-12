const debug = console.info;
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

function isEqual(firstValue, secondValue) {
	return firstValue === secondValue ? true : false;
}

function getIntersections(wire1, wire2) {
	let [wire_1_history, wire_2_history] = [buildCoordinateHistory(wire1), buildCoordinateHistory(wire2)];

	let testWire1 = ['R8', 'U5', 'L5', 'D3', ['U7', 'R6', 'R10']];
	let testWire2 = ['U7', 'R6', 'D4', 'L4', 'R8', ['U12']];

	let matches = testWire1.filter((arr1_element) => {
		if (Array.isArray(arr1_element)) {
			debug('Go down array path.');
			let source_wire1 = arr1_element.filter((arr1_element_element) => {
				testWire2.some((testWire2_element) => {
					debug(`Array Path, Source array1:  Does ${arr1_element_element} === ${testWire2_element}?  ${isEqual(arr1_element_element,testWire2_element)}`);
					return arr1_element_element === testWire2_element;
				})
			})

			// let source_wire2 = testWire2.filter((arr2_element) => {
			// 	return testWire1.some((testWire1_element) => {
			// 		debug(`Array Path, Source array2: Does ${arr2_element} === ${testWire1_element}? ${isEqual(arr2_element,testWire1_element)}`);
			// 	})
			// })

			return source_wire1;
		} else {
			return testWire2.some((arr2_element) => {
				debug(`${arr1_element} is not an array. Moving forward. Does ${arr1_element} === ${arr2_element}: `, isEqual(arr1_element, arr2_element));
				return arr1_element === arr2_element;
			})
		}
	})

	return matches;

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
