// Solution: Reverse the bits in an integer
// https://www.codewars.com/kata/5959ec605595565f5c00002b/
function reverseBits(n) {
	return parseInt(n.toString(2).split("").reverse().join(""), 2);
}
