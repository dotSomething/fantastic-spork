// Write a function capitalize that takes a string and uses .map to return the same string in all caps.
// ex. capitalize('whoop') // => 'WHOOP'
// ex. capitalize('oh hey gurl') // => "OH HEY GURL"

function capitalize(string, separator) {
	let arr = string.split('');
	return arr.map(arr => {
		return arr.toUpperCase();
	}).join(separator);
}

function simpleUppper(string) {
	return string.toUpperCase();
}

// Now write a new function called swapCase that takes a string of words and uses .map and your newly written capitalize()
// function to return a string where every other word is in all caps.
// Hint: look up Array.prototype.map on MDN and see what arguments the .map callback can take.
// ex: swapCase('hey gurl, lets javascript together sometime') // => "HEY gurl, LETS javascript TOGETHER sometime"

function swapCase(incoming) {
	return incoming.split(' ').map((arr, index) => {
		if (index % 2 === 0) {
			return capitalize(arr, '');
		}
		return arr;
	}).join(' ');

}

// Write a function shiftLetters that takes a string and uses .map to return an encoded string with each letter shifted down the
// alphabet by one. Hint: Use Look up the JS functions String.fromCharCode() and String.CharCodeAt() and see if you can use
// Ascii code to acomplish this.
// ex. shiftLetters('hello') // => 'ifmmp'
// ex. (shiftLetters('abcxyz') // => "bcdyz{"

function shiftLetters(incoming) {
	return incoming.split('').map(encoded => String.fromCharCode(encoded.charCodeAt() + 1)).join('');
}

// REDUCE

// Write a function that takes a string and returns an object representing the character
// count for each letter. Use .reduce to build this object.
// ex. countLetters('abbcccddddeeeee') // => {a:1, b:2, c:3, d:4, e:5}

function countLetters(incoming) {
	return incoming.toLowerCase().split('').reduce((acc, val) => {
		if (!acc[val]) {
			acc[val] = 0;
		}
		acc[val]++;
		return acc;
	}, {});
};

// Write a function that takes a string and a target, and returns true or false if the target is present in the string. Use
// .reduce to acomplish this.
// ex. isPresent('abcd', 'b') // => true
// ex. isPresent('efghi', 'a') // => false

function isPresent(incoming, target) {
	return incoming.toLowerCase().split('').reduce((acc, val) => {
		if (val === target.toLowerCase()) {
			acc = true;
			return acc
		}
		return acc;
	}, false)
}

// PARTY WITH MAP AND REDUCE *AT THE SAME TIME*

// Write a function decode that will take a string of number sets and decode it using the following rules:
// When each digit of each set of numbers is added together, the resulting sum is the ascii code for a single letter.
// Convert each set of numbers into a letter and discover the secret message!
// Try using map and reduce together to accomplish this task.
// ex. decode("361581732726247521644353 4161492813593986955 84654117917337166147521") // => "abc"
// ex. decode("584131398786538461382741 444521974525439455955 71415168525426614834414214 353238892594759181769 48955328774167683152 77672648114592331981342373 5136831421236 83269359618185726749 2554892676446686256 959958531366848121621517 4275965243664397923577 616142753591841179359 121266483532393851149467 17949678591875681")
// => "secret-message"

function add(incoming) {
	return incoming.split('').reduce((acc, val) => {
		acc = parseInt(val) + acc;
		return acc
	}, 0)
}

function decode(incoming) {
	const convert = incoming.split(' ');
	return convert.map((getCharCode) => {
		return String.fromCharCode(
			getCharCode.split('').reduce((acc, val) => {
				return acc + parseInt(val, 10);
			}, 0)
		)
	}).join('')
}

function encode(incoming) {
	return incoming.split('').map(encoded => {
		return encoded.charCodeAt();
	}).join(' ')
}

function decodeMessage(incoming) {
	return incoming.split(' ').map(message => {
		return String.fromCharCode(message);
	}).join('');
}

function arrayCardio2(incoming) {
	return incoming.find(comment => {
		return comment.id === 2039842 ? 1 : 0;
	})
}

function arrayCardio2_2(incoming) {
	return incoming.find(comment => comment.id === 823423);
}

function deleteIndex(incoming) {
	console.log(incoming);
	incoming.splice(incoming.findIndex(x => x.id === 2039842), 1);
	return incoming;
}

function frankenSplice(arr1, arr2, n) {
	// It's alive. It's alive!
	// Expected Output:   [4, 1, 2, 3, 5]
	arr1.forEach(element => {
		arr2.splice(n, 0, element)
		n++;
	});
	return arr2;
}

function frankenSpliceNew(arr1, arr2, n) {
	// It's alive. It's alive!
	// Expected Output:   [4, 1, 2, 3, 5]
	newArray = arr2.slice();
	console.log(newArray);
	arr1.forEach(element => {
		newArray.splice(n, 0, element)
		n++;
	});
	return newArray;
}

module.exports = {
	capitalize,
	simpleUppper,
	swapCase,
	shiftLetters,
	countLetters,
	isPresent,
	decode,
	encode,
	decodeMessage,
	arrayCardio2,
	arrayCardio2_2,
	deleteIndex,
	frankenSplice,
	frankenSpliceNew
}
