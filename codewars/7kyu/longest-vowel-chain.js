// Solution: Longest vowel chain
// https://www.codewars.com/kata/59c5f4e9d751df43cf000035/
function solve(s) {
	return s
		.replace(/[^aeiou]/g, "-")
		.split("-")
		.filter((x) => x.length > 0)
		.map((x) => x.length)
		.sort((a, b) => b - a)[0];
}
