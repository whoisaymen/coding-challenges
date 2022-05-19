/*
5kyu: Simple Pig Latin
Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

Examples
pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
pigIt('Hello world !');     // elloHay orldway

https://www.codewars.com/kata/520b9d2ad5c005041100000f
*/

function pigIt(str) {
	return str
		.split(" ")
		.map((word) =>
			word >= "!" && word <= "@"
				? word
				: word.slice(1, word.length) + word[0] + "ay"
		)
		.join(" ");
}
