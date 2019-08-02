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

module.exports = {
	totalCostWithForEach,
	totalCostWithReduce
}
