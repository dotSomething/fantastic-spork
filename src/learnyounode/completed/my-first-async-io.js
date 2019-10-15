/*
Create a file named my-first-async-io.js.

Write a program that uses a single asynchronous filesystem operation to read a file and print the number of newlines it contains to the console (stdout),
similar to running cat file | wc -l.

The full path to the file to read will be provided as the first command-line argument.
*/

const fs = require('fs');

fs.readFile(process.argv[2], 'utf-8', (err, data) => {
	if (err) {
		(console.log('Houston, we have a problem!'));
	}
	let result = countNewLines(data);
	console.log(result);
});

function countNewLines(str) {
	return str.split('\n').length - 1
}

