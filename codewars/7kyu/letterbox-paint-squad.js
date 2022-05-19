// Solution: Letterbox Paint-Squad
// https://www.codewars.com/kata/597d75744f4190857a00008d/
var paintLetterboxes = function (start, end) {
	let arr = [];
	for (let i = start; i <= end; i++) {
		arr.push(i);
	}
	arr = arr.join("").split("").map(Number);

	let freq = [];
	let count = 0;
	for (let i = 0; i <= 9; i++) {
		for (let j = 0; j < arr.length; j++) {
			if (arr[j] === i) {
				count++;
			}
		}
		freq.push(count);
		count = 0;
	}
	console.log(freq);

	return freq;
};
