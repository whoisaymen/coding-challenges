// By 3, or not by 3? That is the question . . .
// https://www.codewars.com/kata/59f7fc109f0e86d705000043/javascript
function divisibleByThree(str) {
	return str.split('').reduce((acc, c) => acc + +c, 0) % 3 === 0;
}
