// Solution: Number of people in the bus
var number = function (busStops) {
	return busStops
		.map((n) => n.reduce((acc, c) => acc - c))
		.reduce((acc, c) => acc + c);
};
