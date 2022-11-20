// Solution: Return a string's even characters
// https://www.codewars.com/kata/566044325f8fddc1c000002c#:~:text=NEXT%20KATA-,Details,-Solutions
function evenChars(string) {
	if (string.length < 2 || string.length > 100) return 'invalid string';
	return string.split('').filter((x, i) => i % 2 !== 0);
}
