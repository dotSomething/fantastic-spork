const debug = console.debug;

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

function calculateClosestIntersection() {
	let coordinates = {
		starting: {
			x: 0,
			y: 0,
			direction: ''
		},
		intersections: {

		}
	};

	// Function works
	const getGridLocation = (value) => {
		const res = value.match(/\d+/g).toString()
		return res;
	}

	// Function works
	const getAxis = (value) => {
		let axis = 'unset';
		const letter = value.toLowerCase().match(/[a-zA-Z]*/);

		if (letter == 'u' || letter == 'd') {
			axis = 'y'
		}
		if (letter == 'r' || letter == 'l') {
			axis = 'x'
		}
		return axis;
	}

	function moveToNextStep (incomingX, incomingY, incomingDirection) {
		// Add axis, location to coordinates object
		console.log( `
		 ${incomingX} on line 108
		 ${incomingY} on line 109
		 ${incomingDirection} on line 110
		`)

		coordinates.starting.incomingX = incomingDirection;

		console.log(coordinates);
	}

	const didAnythingCross = () => {
		// Compare current corrdinates with previous coordinates

		// If cross = true, add (x, y) of intersection to coordinates.intersection
	}

	moveToNextStep(
		getAxis('R55'),
		getAxis('D99'),
		getGridLocation('R22')
	);
	return coordinates;
}

module.exports = {
	calculateFuel,
	calculateCalibratedFuel,
	gravityAssist,
	initGravityAssist,
	calculateClosestIntersection
}
