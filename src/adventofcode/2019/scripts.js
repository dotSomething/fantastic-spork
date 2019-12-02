function calculateFuel(masses) {
	return masses.reduce((counter, mass) => {
		return counter + (Math.floor(mass / 3 - 2));
	}, 0)
}

module.exports = {
	calculateFuel
}
