// Solution: Divide and Conquer
// https://www.codewars.com/kata/57eaec5608fed543d6000021/
function divCon(x) {
	return (
		x.filter((x) => typeof x === "number").reduce((acc, c) => acc + c, 0) -
		x.filter((x) => typeof x === "string").reduce((acc, c) => +acc + +c, 0)
	);
}
