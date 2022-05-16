// All Star Code Challenge #3
// https://www.codewars.com/kata/58640340b3a675d9a70000b9/
var removeVowels = function (str) {
	return str
		.split("")
		.filter(
			(x) => x !== "a" && x !== "e" && x !== "i" && x !== "o" && x !== "u"
		)
		.join("");
};
