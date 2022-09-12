// Solution: Difference of 2
// https://www.codewars.com/kata/5340298112fa30e786000688/javascript
function twosDifference(input) {
	let arr = [],
		pair = [];
	for (let i = 0; i < input.length; i++) {
		for (let j = i + 1; j < input.length; j++) {
			if (Math.abs(input[i] - input[j]) === 2) {
				pair.push(Math.min(input[i], input[j]), Math.max(input[i], input[j]));
				arr.push(pair);
				pair = [];
			}
		}
	}
	return arr.sort((a, b) => a[0] - b[0]);
}
