// Solution: esreveR
// https://www.codewars.com/kata/5413759479ba273f8100003d/
reverse = function (array) {
	let arr = [];
	for (let value of array) {
		arr.unshift(value);
	}
	return arr;
};
