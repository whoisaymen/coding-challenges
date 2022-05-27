// Solution: Double Sort
// https://www.codewars.com/kata/57cc79ec484cf991c900018d/
function dbSort(a) {
	let numbers = a.filter((x) => typeof x === "number").sort((a, b) => a - b);
	let strings = a.filter((x) => typeof x === "string").sort();
	return numbers.concat(strings);
}
