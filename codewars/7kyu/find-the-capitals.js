// Solution: Find the capitals
var capitals = function (word) {
	return word
		.split("")
		.map((x, i) => (x === x.toUpperCase() ? i : false))
		.filter((x) => x !== false);
};
