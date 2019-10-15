/*
Create a file named baby-steps.js.
Write a program that accepts one or more numbers as command-line arguments and prints the sum of those numbers to the console (stdout).
*/

const p = process.argv;
const numbers = p.slice(2);

function add() {
	let result = 0;
	numbers.forEach(element => {
		result += parseInt(element);
	});
	console.log(result);
}

add();
