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

module.exports = {
	getVoters,
	votingReport,
	getVotersFilter
}
