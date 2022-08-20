// Solution: Find the missing letter
// https://www.codewars.com/kata/5839edaa6754d6fec10000a2/solutions/javascript
function findMissingLetter(array) {
	let first = array[0].charCodeAt();
	let arr = [];

	for (let i = 0; i <= array.length; i++) {
		arr.push(first + i);
	}

	let complete = arr.map((x) => (x = String.fromCharCode(x)));
	return complete.filter((x) => array.indexOf(x) == -1)[0];
}
