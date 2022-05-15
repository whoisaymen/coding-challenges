// Solution: Training JS #12: loop statement --for..in and for..of
// https://www.codewars.com/kata/5722b3f0bd5583cf44001000
function giveMeFive(obj) {
	let arr = [];
	for (let prop in obj) {
		if (prop.length === 5) {
			arr.push(prop);
		}
		if (obj[prop].length === 5) {
			arr.push(obj[prop]);
		}
	}
	return arr;
}
