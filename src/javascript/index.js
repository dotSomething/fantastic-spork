const SCRIPTS = require('./scripts.js');
const DATA = require('./data.js');
const INPUT = [process.argv[2], process.argv[3]];

SCRIPTS.countdown(10)
// console.log(SCRIPTS.getGreatestCommonDenominator(INPUT[0], INPUT[1]));
// console.log('One of my favorite cities is', SCRIPTS.randomCity(0, DATA.FAVORITE_CITIES));
// console.log(SCRIPTS.newObjectWithObjectSpread(DATA.MOVIEARRAYS, 'newStuff', 'Darc'));
// console.log(SCRIPTS.makeNewObjectD(DATA.MOVIEARRAYS, true, 'update', 'Bad Robot'));
// console.log(SCRIPTS.makeNewObjectH(DATA.MOVIEARRAYS));
// console.log(SCRIPTS.makeGoodWithReference(DATA.MOVIEARRAYS.reference));
// console.log(SCRIPTS.makeGoodWithCopy(DATA.MOVIEARRAYS.copy));
// console.log(SCRIPTS.frankenSpliceNew(DATA.FRANKENSPLICEARRAYS[0], DATA.FRANKENSPLICEARRAYS[1], 1));
// console.log(SCRIPTS.frankenSpliceNew([1,2,3], [4, 5], 1));
// console.log("    ", SCRIPTS.decodeMessage(DATA.DECODEMESSAGESTRING));
// console.log(`"${DATA.DECODEMESSAGESTRING}" means: `);
// console.log(SCRIPTS.decodeMessage(DATA.DECODEMESSAGESTRING))
// console.log(SCRIPTS.encode(DATA.ENCODESTRING));
// console.log(SCRIPTS.isPresent(DATA.ISPRESENTSTRING, DATA.ISPRESENTTARGET))
// console.log(SCRIPTS.countLetters(DATA.COUNTLETTERSSTRING));
// console.log(SCRIPTS.swapCase(DATA.SWAPCASESTRING));
// console.log(SCRIPTS.votingReport(DATA.VOTERS, 18, 25, false));
// console.log(SCRIPTS.flattenWithReduce(DATA.ARRAY5));
// console.log(SCRIPTS.flattenWithConcat(DATA.ARRAY5));
// console.log(SCRIPTS.totalCostWithReduce(DATA.WISHLIST));
// SCRIPTS.countPeopleWhoVotedWithMap(DATA.VOTERS);
// console.log(SCRIPTS.countPeopleWhoVotedWithForEach(DATA.VOTERS));
// console.log(SCRIPTS.turnArrayIntoStringWithReduce(DATA.ARRAY2), '(',typeof(SCRIPTS.turnArrayIntoStringWithReduce(DATA.ARRAY2)),')');
// console.log(SCRIPTS.arraySumWithForEach(DATA.ARRAY1));
