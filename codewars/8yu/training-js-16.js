// Solution: Training JS #16: Methods of String object--slice(), substring() and substr()
// https://www.codewars.com/kata/57274562c8dcebe77e001012/
function cutIt(arr) {
	let lengths = arr.map((x) => x.length);
	let min = Math.min(...lengths);
	return arr.map((x) => x.slice(0, min));
}
