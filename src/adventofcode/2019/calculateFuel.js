const CALCULATE_FUEL = require('./scripts');
const DATA = require('./data');

console.log(CALCULATE_FUEL.calculateFuel(DATA.SPACECRAFT_DATA['Module Masses']));
