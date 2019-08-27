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

module.exports = {
	makeGoodWithReference,
	makeGoodWithCopy
}
