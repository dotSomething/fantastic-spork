// Exercise 3  - Return number of people who voted.
function countPeopleWhoVotedWithReduce(incomingArray) {
	return incomingArray.reduce((acc, val) => {
		val.voted === true ? acc++ : acc;
		return acc;
	}, 0);
}

// console.log(peopleWhoVoted + ' people voted with a reduce.');
// console.log('');
// console.log('');

// Exercise 3b  - Return number of people who voted WITHOUT using reduce

// let count = 0;
// const morePeopleWhoVoted = arrays.voters.map((curr) => {
// 	if (curr.voted === true) {
// 		count++;
// 	}
// });
// console.log('>>>>>>>> EXERCISE # 3');
// console.log(count + ' people voted with a map.');
// console.log('');
// console.log('');

function countPeopleWhoVotedWithMap(incomingElement) {
	let count = 0;
		incomingElement.map((curr) => {
			if (curr.voted === true) {
				count ++
			}
			return count;
		})
		console.log(count);
};

// const updatedVoterRecords = arrays.voters.map((newcurr) => {
// 	newcurr.voted ? newcurr.note = "Thanks" : newcurr;
// 	return newcurr;
// });

// // console.log('Updated Voter Records' + updatedVoterRecords); // BAD!!!!!!!!  The '+' sign is confusing console.log because it can't concatenate with an object.
// console.log('Updated Voter Records', updatedVoterRecords); // GOOD
// console.log('');
// console.log('');

// // Exercise 3c  - Return number of people who voted WITHOUT using reduce() or map()
// let forEachCounter = 0;
// arrays.voters.forEach(element => {
// 	element.voted  === true ? ++forEachCounter : forEachCounter;
// });

// console.log('Vote counter using forEach:  ' + forEachCounter);
// console.log('');
// console.log('');

function countPeopleWhoVotedWithForEach(incomingArray) {
	let forEachCounter = 0;
	incomingArray.forEach(element => {
		element.voted  === true ? ++forEachCounter : forEachCounter;
	});
	return forEachCounter;

}


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

// Excersie 1 - Sum all numbers in array

function arraySumWithReduce(incomingArray) {
	return incomingArray.reduce((acc, val) => {
		return acc + val
	}, 0);
}

function arraySumWithForEach(incomingArray) {
	let counter = 0;
	incomingArray.forEach(element => {
		counter = counter + element;
	});
	return counter;
}

// Exercise 2 - Return the array as a string


function turnArrayIntoStringWithReduce(incomingArray) {
	const convertedArray = incomingArray.reduce((acc, val) => {
		if (val) {
			return acc + `${val}`;
		}
	});
	return convertedArray;
}

function totalCostWithReduce(incomingArray) {
	return incomingArray.reduce((acc,val) => {
		val.price > 0 ? acc = acc + val.price : acc;
		return acc;
	}, 0);
}

// console.log('>>>>>>>> EXERCISE # 4');
// console.log('To buy everything, you need ' + buyEverything);
// console.log('');
// console.log('');

// function totalCostWithReduce(incomingArray) {
// 	return incomingArray.reduce((agg, value) => {
// 		value.price > 0 ? agg = agg + value.price : agg;
// 		return agg;
// 	}, 0);
//  }

// const buyIt = shoppingSpree(arrayList.wishlist);
// console.log('Shopping spree function: ' + buyIt);
// console.log('');
// console.log('');

// let wishlistCounter = 0;
// arrayList.wishlist.forEach(element => {
// 	wishlistCounter = wishlistCounter + element.price;
// 	return wishlistCounter;
// });
// console.log('forEach wishlist counter: ' + wishlistCounter);
// console.log('');
// console.log('');

function totalCostWithForEach(incomingArray) {
	let secondShoppingSpreeCounter = 0;
	incomingArray.forEach(element => {
		return secondShoppingSpreeCounter = secondShoppingSpreeCounter + element.price;
	});
	return secondShoppingSpreeCounter;
 }
// const secondShoppingSpree = totalCostWithForEach(arrayList.wishlist);
// console.log('Second Shopping Spree: ' + secondShoppingSpree);
// console.log('');
// console.log('');

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

// getVoters works
function getVoters (incomingArray, minAge, maxAge, votingStatus) {
	return incomingArray.reduce((acc, val) => {
		if (val.age >= minAge && val.age <= maxAge && val.voted === votingStatus) {
			acc.push(val);
		}
		return acc;
	}, []);
};

function getVotersFilter (incomingAarray, min, max, votingStatus) {
	return incomingAarray.filter(val => {
		return val.age >= min && val.age <= max && val.voted === votingStatus;
	});
};

// BAD BAD BAD!!!
// function test (incomingArray) {
// 	const youths = incomingArray.reduce((yacc, val) => {
// 		if (val.age >= 18 && val.age <= 25) {
// 			yacc++;
// 		}
// 		return yacc;
// 	}, 0);
// 	const youthVotes = incomingArray.reduce((yagg, val) => {
// 		if (val.voted === true) {
// 			yagg++;
// 		}
// 		return yagg;
// 	}, 0);
// 	const mids = incomingArray.reduce((macc, val) => {
// 		if (val.age >= 26 && val.age <= 35) {
// 			macc++;
// 		}
// 		return macc;
// 	}, 0);
// 	const midVotes = incomingArray.reduce((magg, val) => {
// 		if (val.voted === true) {
// 			magg++;
// 		}
// 		return magg;
// 	}, 0);
// 	const olds = incomingArray.reduce((oacc, val) => {
// 		if (val.age >= 36 && val.age <= 55) {
// 			oacc++;
// 		}
// 		return oacc;
// 	}, 0);
// 	const oldVotes = incomingArray.reduce((oagg, val) => {
// 		if (val.voted === true) {
// 			oagg++;
// 		}
// 		return oagg;
// 	}, 0);
// 	console.log('Youth votes: ', youthVotes);
// 	console.log('Youths :', youths);
// 	console.log('Mid votes: ', midVotes);
// 	console.log('Mids :', mids);
// 	console.log('Old votes: ', oldVotes);
// 	console.log('Olds :', olds);
// 	return;
// };

function votingReport(incomingArray) {
	return incomingArray.reduce((acc, val) => {
		if (val.age >= 18 && val.age <= 25) {
			acc.youth+=1;
			if (val.voted) {
				acc.youthVoted+=1;
			}
		}
		else if(val.age >= 26 && val.age <= 35) {
			acc.mid+=1;
			if (val.voted) {
				acc.midVoted+=1;
			}
		}
		else if(val.age >= 36 && val.age <= 55) {
			acc.old+=1;
			if (val.voted) {
				acc.oldVoted+=1;
			}
		}
		return acc;
	}, {
		youth: 0,
		youthVoted: 0,
		mid: 0,
		midVoted: 0,
		old: 0,
		oldVoted: 0,
	});
}

// JS30  No.14 Array Reference vs Copy

// This function is a reference to arrays.movies.reference.
// The original array is modified.
function makeGoodWithReference(goodMovies) {
	console.log(goodMovies);
	goodMovies[3] = 'D9';
	return goodMovies;
}

// This function returns a COPY of arrays.movies.copy.
// The original array is not modified.
function makeGoodWithCopy(goodMovies) {
	const movieCopy = [...goodMovies]
	movieCopy[4] = 'John Wick'
	console.log(goodMovies);
	return movieCopy;
}

function copyArray(incomingArray) {
	const copyBySplice = incomingArray.slice();
	const copyByConcat = [].concat(incomingArray);
	const copyBySpread = [...incomingArray];
	const copyByArrayFrom = Array.from(incomingArray);

	copyByArrayFrom[3] = 'Batman';
	console.log('Original Array: ', incomingArray)

	return copiedArrays = {
		splice: copyBySplice,
		concat: copyByConcat,
		spread: copyBySpread,
		copyByArrayFrom
	}
}
function newObjectWithObjectSpread(incomingObject, newElement, value) {
	const newObj = { ...incomingObject, [newElement]: value }
	console.log(incomingObject);
	return newObj
}

function makeNewObjectH(incomingObject) {
	const newObject = Object.assign({}, incomingObject, { update: 'Bad Robot' })
	return newObject;
}

function makeNewObjectD(incomingObject, updateExisting, x, value) {
	if (updateExisting) {
		const newObject = Object.assign({}, incomingObject, { [x]: value });
		return newObject;
	}
	if (!updateExisting) {
		const msg = '\nNothing updated.\n'
		console.log(incomingObject)
		return msg
	}
}

// Challenge: Write a function that prints one of your favorite cities.
function randomCity (min = 0, max) {
	select = Math.floor(Math.random() * (max.length - min)) + min;
	const randomCity = max[select];
	return randomCity;
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
	frankenSpliceNew,
	arraySumWithReduce,
	arraySumWithForEach,
	turnArrayIntoStringWithReduce,
	countPeopleWhoVotedWithReduce,
	countPeopleWhoVotedWithMap,
	countPeopleWhoVotedWithForEach,
	totalCostWithForEach,
	totalCostWithReduce,
	flattenWithConcat,
	flattenWithReduce,
	flattenWithForEach,
	getVoters,
	votingReport,
	getVotersFilter,
	makeGoodWithReference,
	makeGoodWithCopy,
	copyArray,
	makeNewObjectH,
	makeNewObjectD,
	newObjectWithObjectSpread,
	randomCity
}
