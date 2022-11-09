// Lost number in number sequence
// https://www.codewars.com/kata/595aa94353e43a8746000120/javascript
function findDeletedNumber(arr, mixArr) {
	let int = arr.filter((x) => !mixArr.includes(x));
	return int.length > 0 ? int[0] : 0;
}
