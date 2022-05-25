// Solution: Consonant value
// https://www.codewars.com/kata/59c633e7dcc4053512000073

function solve(s) {
	return Math.max(
		...s
			.replace(/[aeiou]/g, "-")
			.split("-")
			.map((x) => (x !== "-" ? getValue(x) : x))
	);
}

function getValue(str) {
	return str
		.split("")
		.map((x) => x.charCodeAt() - 96)
		.reduce((acc, c) => acc + c, 0);
}
