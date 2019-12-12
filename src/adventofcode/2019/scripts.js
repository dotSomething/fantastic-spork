function calculateFuel(masses) {
	return masses.reduce((counter, mass) => {
		return counter + (Math.floor(mass / 3 - 2));
	}, 0)
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

function initGravityAssistArch(opCodes, noun, verb, output) {
	restoreState(opCodes, noun, verb);

	for (let i = 0; i < opCodes.length; i++) {
		const formNoun = opCodes[i];
		const formVerb = opCodes[opCodes[i + 1]];
		const analysis = 100 * formNoun + formVerb;
		if (analysis == output) {
			let results = [noun, verb]
			return results;
		}
		// console.log(`100 * ${formNoun} + ${formVerb} = ${analysis}`);
	}
}

function initGravityAssist(opCodes, output) {

	for (let i = 0; i < 100; i++) {

		for (let j = 0; j < 100; j++) {
			if(gravityAssist([...opCodes], i, j) == output) {
				return 100 * i + j;
			}
		}
	}
}


module.exports = {
	calculateFuel,
	gravityAssist,
	initGravityAssist
}
