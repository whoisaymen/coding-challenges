// Solution: Sort the Gift Code
function sortGiftCode(code) {
	return code
		.split("")
		.sort((a, b) => a.localeCompare(b))
		.join("");
}
