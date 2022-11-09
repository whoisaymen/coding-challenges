// Product Array (Array Series #5)
// https://www.codewars.com/kata/5a905c2157c562994900009d/javascript
function productArray(numbers) {
	let arr = [];

	for (let i = 0; i < numbers.length; i++) {
		let element = numbers.splice(i, 1);
		let product = numbers.reduce((acc, c) => acc * c);
		numbers.splice(i, 0, element[0]);
		arr.push(product);
	}

	return arr;
}
