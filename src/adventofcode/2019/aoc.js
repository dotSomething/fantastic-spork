const SCRIPTS = require('./scripts');
const DATA = require('./data');

// console.log(`Day 1:
// Sum of the fuel requirements for all of the modules on your spacecraft:  ${SCRIPTS.calculateFuel(DATA.SPACECRAFT_DATA['Module Masses'])}
// `);

// console.log(`Day 1, Part 2:
// Calibrated fuel is: ${SCRIPTS.calculateCalibratedFuel(DATA.SPACECRAFT_DATA["Module Masses"])}
// `)

// console.log(`Day 2, Part 1:
// Value of position [0] after the program halts:  ${SCRIPTS.gravityAssist(DATA.SPACECRAFT_DATA.Intcodes, 12, 2)}
// `)

// console.log(`Day 2, Part 2:
// Output is: ${SCRIPTS.initGravityAssist(DATA.SPACECRAFT_DATA.Intcodes, 19690720)}
// `)

console.log(SCRIPTS.calculateClosestIntersection());
