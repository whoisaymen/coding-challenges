// Solution: Training JS #17: Methods of String object--indexOf(), lastIndexOf() and search()
// https://www.codewars.com/kata/57277a31e5e51450a4000010/
function firstToLast(str, c) {
	console.log(str, c);

	return str.search(c) === -1 ? -1 : str.lastIndexOf(c) - str.indexOf(c);
}
