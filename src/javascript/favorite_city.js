// Challenge: Write a function that prints one of your favorite cities.
const listOfCities = require('./arrayList');
const randomCity = function getRandomCity(min = 0, max = listOfCities.favorite_cities.length) {
	select = Math.floor(Math.random() * (max - min)) + min;
	const randomCity = listOfCities.favorite_cities[select];
	return randomCity;
}

module.exports = {
	randomCity
}
