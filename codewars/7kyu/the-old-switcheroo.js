// Solution: The old switcheroo
// https://www.codewars.com/kata/55d410c492e6ed767000004f/
function vowel2index(str) {
	return str
		.split("")
		.map((x, i) => x.replace(/[aeiouAEIOU]/g, i + 1))
		.join("");
}
