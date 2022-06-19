// Solution: Stop gninnipS My sdroW!
// https://www.codewars.com/kata/5264d2b162488dc400000001/
function spinWords(string) {
	return string
		.split(' ')
		.map((word) => (word.length >= 5 ? word.split('').reverse().join('') : word))
		.join(' ');
}
