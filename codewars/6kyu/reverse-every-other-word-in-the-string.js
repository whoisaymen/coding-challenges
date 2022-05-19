// Solution:
// https://www.codewars.com/kata/58d76854024c72c3e20000de/
function reverse(str) {
	return str
		.split(" ")
		.map((x, i) => (i % 2 !== 0 ? x.split("").reverse().join("") : x))
		.join(" ")
		.trim();
}
