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


module.exports = {
	makeGoodWithReference,
	makeGoodWithCopy,
	copyArray,
	makeNewObjectH,
	makeNewObjectD,
	newObjectWithObjectSpread
}
