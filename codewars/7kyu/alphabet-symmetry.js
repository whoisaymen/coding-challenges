// Solution: Alphabet symmetry
// https://www.codewars.com/kata/59d9ff9f7905dfeed50000b0/
function solve(arr) {
	let finalArr = [];
	let sum = 0;
	for (let i = 0; i < arr.length; i++) {
		for (let j = 0; j < arr[i].length; j++) {
			if (arr[i][j].toLowerCase().charCodeAt() - 96 === j + 1) {
				sum++;
			}
		}
		finalArr.push(sum);
		sum = 0;
	}
	return finalArr;
	//code
}
