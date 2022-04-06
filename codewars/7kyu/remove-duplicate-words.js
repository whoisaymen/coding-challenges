// Solution: Remove duplicate words
function removeDuplicateWords(s) {
	return [...new Set(s.split(" "))].join(" ");
}
