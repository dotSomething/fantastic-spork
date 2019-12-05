function calculateFuel(masses) {
	return masses.reduce((counter, mass) => {
		return counter + (Math.floor(mass / 3 - 2));
	}, 0)
}

function resetGravityAssist(opCodes) {
	(function restoreState() {
		opCodes[1] = 12;
		opCodes[2] = 2;
	})();

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
			break;
		}
	}
}

module.exports = {
	calculateFuel,
	resetGravityAssist
}
