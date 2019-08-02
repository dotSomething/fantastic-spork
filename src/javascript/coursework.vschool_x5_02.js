// 5) Given an array of arrays, flatten them into a single array
// Note: Take a look at Array.concat() to help with this one
// Syntax:  var new_array = old_array.concat([value1[, value2[, ...[, valueN]]]])
// Expected output:  ["1", "2", "3", true, 4, 5, 6];

// module.exports.flatten = function flatten(arrayToFlatten) {
// 	let flattenedArray = arrayToFlatten.concat();
// 	return flattenedArray;
//  };

function flattenWithConcat(arrayToFlatten) {
	let flattenedArray = arrayToFlatten.concat();
	return flattenedArray;
 };  // DOES NOT WORK

 function flattenWithForEach(incomingArray) {
	 let flat = [];
	 incomingArray.forEach(element => {
		 return flat = flat.concat(element);
	 });
	 return flat;
 } // WORKS

function flattenWithReduce(incomingArray){
	return incomingArray.reduce((acc, val) => {
		if (val) {
			return acc = acc.concat(val);
		}
	}, []);
} // WORKS


/*
		// return flat.push(element); // WRONG
		// return flat = `${element}`, `${element}`; // WRONG
		// return flat.push(`${element}`);
*/


module.exports = {
	flattenWithConcat,
	flattenWithReduce,
	flattenWithForEach
}
