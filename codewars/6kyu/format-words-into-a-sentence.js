// Solution: Format words into a sentence
// https://www.codewars.com/kata/51689e27fe9a00b126000004/javascript
function formatWords(words) {
	if (!words || words.length == 0) return '';
	if (words.length > 0) words = words.filter((e) => String(e).trim());
	if (!words || words.length == 0) return '';
	if (words.length === 1) return words.join('');
	else if (words.length === 2) return words[0] + ' and ' + words[1];
	else return words.slice(0, words.length - 1).join(', ') + ' and ' + words[words.length - 1];
}
