// Solution: Even numbers in an array
// https://www.codewars.com/kata/5a431c0de1ce0ec33a00000c/
function evenNumbers(array, number) {
	let evens = array.filter((x) => x % 2 === 0).reverse();
	let arr = [];
	for (let i = 0; i < number; i++) {
		arr.unshift(evens[i]);
	}
	return arr;
}
