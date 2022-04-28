// Solution: Filter the number
var FilterString = function (value) {
	return +value
		.split("")
		.filter((n) => n >= "0" && n <= "9")
		.join("");
};
