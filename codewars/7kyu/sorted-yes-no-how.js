// Solution: Sorted? yes? no? how?
function isSortedAndHow(array) {
	let copy = array.slice();
	let copy2 = array.slice();
	let ascending = copy.sort((a, b) => a - b);
	let descending = copy2.sort((a, b) => b - a);

	return array.toString() === ascending.toString()
		? "yes, ascending"
		: array.toString() === descending.toString()
		? "yes, descending"
		: "no";
}
