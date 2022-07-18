// Solution: Build Tower
// https://www.codewars.com/kata/576757b1df89ecf5bd00073b/
function towerBuilder(nFloors) {
	let arr = [];
	let star = '';

	for (let i = 1; i <= nFloors; i++) {
		arr.push('*'.repeat(i * 2 - 1));
	}

	for (let i = 0; i < arr.length; i++) {
		arr[i] = ' '.repeat(arr.length - i - 1) + arr[i] + ' '.repeat(arr.length - i - 1);
	}
	return arr;
}
