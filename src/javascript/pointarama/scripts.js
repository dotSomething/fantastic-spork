const debug = console.debug;

function getUncertainty() {
	const readline = require('readline-sync');
	const uncertainty = readline.question(`How much uncertainty do you think this story has?
s for Small
m for Medium
l for Large
`)

	return uncertainty;
}
function getComplexity() {
	const readline = require('readline-sync');
	const complexity = readline.question(`How much complexitys do you think this story has?
s for Small
m for Medium
l for Large
`)
	return complexity;
}

function getEffort() {
	const readline = require('readline-sync');
	const effort = readline.question(`How much effort do you think this story would take?
s for Small
m for Medium
l for Large
`)
	return effort;
}

function calculatePoints() {
	let points;
switch (getUncertainty(), getComplexity(), getEffort()) {
		case 's', 's', 's':
			points = 1
			break;
		case 's', 's', 'm':
			points = 2
			break;
		case 's', 's', 'l':
			points = 5
			break;
		case 's', 'm', 's':
			points = 2
			break;
		case 's', 'm', 'm':
			points = 3
			break;
		case 's', 'm', 'l':
			points = 5
			break;
		case 's', 'l', 's':
			points = 3
			break;
		case 's', 'l', 'm':
			points = 5
			break;
		case 's', 'l', 'l':
			points = 8
			break;
		case 'm', 's', 's':
			points = 3
			break;
		case 'm', 's', 'm':
			points = 5
			break;
		case 'm', 's', 'l':
			points = 8
			break;
		case 'm', 'm', 's':
			points = 5
			break;
		case 'm', 'm', 'm':
			points = 5
			break;
		case 'm', 'm', 'l':
			points = 8
			break;
		case 'm', 'l', 's':
			points = 5
			break;
		case 'm', 'l', 'm':
			points = 8
			break;
		case 'l', 'm', 's':
			points = 8
			break;
		case 'l', 'm', 'm':
			points = 8
			break;
		case 'l', 'm', 'l':
			points = 13
			break;
		case 'l', 'l', 's':
			points = 8
			break;
		case 'l', 'l', 'm':
			points = 13
			break;
		case 'l', 'l', 'l':
			points = 13
		default:
			let msg = 'Something went wrong. Unable to calculate points.'
			return msg;
	}
	console.log(`Based on those classifiations, your estimate is ${points}.`);
}

module.exports = {
	calculatePoints
}
