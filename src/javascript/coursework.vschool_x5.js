// 5) Given an array of arrays, flatten them into a single array
// Note: Take a look at Array.concat() to help with this one
// Syntax:  var new_array = old_array.concat([value1[, value2[, ...[, valueN]]]])
// Expected output:  ["1", "2", "3", true, 4, 5, 6];

var arrays = [
	["1", "2", "3"],
	[true],
	[4, 5, 6]
];

function flatten(arrayToFlatten) {
	let flattenedArrary = arrayToFlatten.concat();
	return flattenedArrary;
 }
console.log('>>>>>>>> EXERCISE # 5');
console.log('');
console.log('Flattened array: ' + flatten(arrays));
console.log('');
console.log('flatten is a: ' + typeof(flatten));
console.log('');
