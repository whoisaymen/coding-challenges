// Solution: You're a Square
var isSquare = function (n) {
	return Math.floor(Math.sqrt(n)) - Math.sqrt(n) === 0 ? true : false;
};
