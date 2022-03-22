// Solution: Simple Fun #176 - Reverse Letter
function reverseLetter(str) {
	return str
		.replace(/[^a-zA-Z]/g, "")
		.split("")
		.reverse()
		.join("");
}
