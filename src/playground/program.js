var totalCost = 14.99;

// console.log(process.argv);

var sizeOfParty = process.argv[2];
var averageCost = totalCost / sizeOfParty;

console.log("$" + averageCost);