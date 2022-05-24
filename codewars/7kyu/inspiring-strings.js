// Solution: Inspiring Strings
// https://www.codewars.com/kata/5939ab6eed348a945f0007b2/
function longestWord(stringOfWords) {
	let maxLength = Math.max(...stringOfWords.split(" ").map((x) => x.length));
	let longestWords = stringOfWords
		.split(" ")
		.filter((x) => x.length === maxLength);
	return longestWords[longestWords.length - 1];
}
