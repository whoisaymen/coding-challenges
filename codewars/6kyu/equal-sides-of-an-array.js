// Equal Sides Of An Array
// https://www.codewars.com/kata/5679aa472b8f57fb8c000047/javascript
function findEvenIndex(arr) {
	let sum = 0;
	for (let i = 0; i < arr.length; i++) {
		sum += arr[i];
		if (sum === arr.slice(i, arr.length).reduce((acc, c) => acc + c, 0)) {
			return i;
		}
	}
	return -1;
}
