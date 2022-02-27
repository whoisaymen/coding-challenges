// Solution: Two to one
function longest(s1, s2) {
	return [...new Set("".concat(s1, s2).split("").sort())].join("");
}
