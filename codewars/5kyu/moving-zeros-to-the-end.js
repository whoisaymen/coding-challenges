// Solution: Moving Zeros To The End
// https://www.codewars.com/kata/52597aa56021e91c93000cb0/
function moveZeros(arr) {
	console.log(arr);
	let zeros = [];
	for (let i = 0; i < arr.length; i++) {
		if (arr[i] === 0) {
			arr.splice(i, 1);
			zeros.push(0);
			i--;
		}
	}
	console.log(arr, zeros);
	return arr.concat(zeros);
}
