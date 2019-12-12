const SCRIPTS = require('./scripts');
const DATA = require('./data');
const ACTION = process.argv[2];


if (ACTION == 1) {
	console.log(`Day 1:
	Sum of the fuel requirements for all of the modules on your spacecraft:  ${SCRIPTS.calculateFuel(DATA.SPACECRAFT_DATA['Module Masses'])}
	`);
} else if (ACTION == 2) {

	console.log(`Day 2, Part 1:
	Value of position [0] after the program halts:  ${'reset', SCRIPTS.resetGravityAssist(DATA.SPACECRAFT_DATA.Intcodes)}
	`)
} else if (ACTION == 2.1) {
	console.log(`Day 2, Part 2:
	${'initiate', SCRIPTS.resetGravityAssist(DATA.SPACECRAFT_DATA.Intcodes)} produces output 19690720.
`)
}