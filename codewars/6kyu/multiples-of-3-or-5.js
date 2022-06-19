// Solution: Multiples of 3 or 5
// https://www.codewars.com/kata/514b92a657cdc65150000006/
function solution(number) {
	let arr = [];
	for (let i = 1; i < number; i++) {
		if (i % 3 === 0 || i % 5 === 0) {
			arr.push(i);
		}
	}
	return arr.reduce((acc, c) => acc + c, 0);
}
