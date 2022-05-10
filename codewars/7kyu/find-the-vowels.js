// Solution: Find the vowels
function vowelIndices(word) {
	let arr = [];
	for (let i = 0; i < word.length; i++) {
		if (
			word[i].toLowerCase() == "a" ||
			word[i].toLowerCase() == "e" ||
			word[i].toLowerCase() == "i" ||
			word[i].toLowerCase() == "o" ||
			word[i].toLowerCase() == "u" ||
			word[i].toLowerCase() == "y"
		) {
			arr.push(i + 1);
		}
	}

	return arr;
}
