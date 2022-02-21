// Solution: Shortest word
function findShort(s) {
	return s
		.split(" ")
		.map((n) => n.length)
		.sort((a, b) => a - b)[0];
}
