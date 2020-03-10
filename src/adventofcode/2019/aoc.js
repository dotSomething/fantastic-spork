const SCRIPTS = require('./scripts');
const DATA = require('./data');
const CALL = console.log;
// CALL(`Day 1:
// Sum of the fuel requirements for all of the modules on your spacecraft:  ${SCRIPTS.calculateFuel(DATA.SPACECRAFT_DATA['Module Masses'])}
// `);

// CALL(`Day 1, Part 2:
// Calibrated fuel is: ${SCRIPTS.calculateCalibratedFuel(DATA.SPACECRAFT_DATA["Module Masses"])}
// `)

// CALL(`Day 2, Part 1:
// Value of position [0] after the program halts:  ${SCRIPTS.gravityAssist(DATA.SPACECRAFT_DATA.Intcodes, 12, 2)}
// `)

// CALL(`Day 2, Part 2:
// Output is: ${SCRIPTS.initGravityAssist(DATA.SPACECRAFT_DATA.Intcodes, 19690720)}
// `)

CALL(SCRIPTS.getIntersections(
	['R8', 'U5'],
	['U5', 'R9']
));
