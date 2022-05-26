// Solution: Delete occurrences of an element if it occurs more than n times
// https://www.codewars.com/kata/554ca54ffa7d91b236000023
function deleteNth(arr, n) {
	let list = [];
	for (let i = 0; i < arr.length; i++) {
		if (list.filter((x) => x === arr[i]).length < n) {
			list.push(arr[i]);
		}
	}
	return list;
}
