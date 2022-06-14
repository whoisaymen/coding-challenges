// Solution: Initialize my name
// https://www.codewars.com/kata/5768a693a3205e1cc100071f/
function initializeNames(name) {
	let arr = name.split(' ');
	if (arr.length <= 2) return name;
	for (let i = 1; i < arr.length - 1; i++) {
		arr[i] = arr[i][0] + '.';
	}
	return arr.join(' ');
}
