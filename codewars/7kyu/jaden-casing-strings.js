// Solution: Jaden Casing Strings
String.prototype.toJadenCase = function () {
	return this.split(" ")
		.map((n) => n[0].toUpperCase() + n.slice(1))
		.join(" ");
};
