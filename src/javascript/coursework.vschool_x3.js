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

module.exports = {
	countPeopleWhoVotedWithReduce,
	countPeopleWhoVotedWithMap,
	countPeopleWhoVotedWithForEach
}
