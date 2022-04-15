// Solution: Greet me
var greet = function (name) {
	return (
		"Hello " +
		name.slice(0, 1).toUpperCase() +
		name.slice(1, name.length).toLowerCase() +
		"!"
	);
};
