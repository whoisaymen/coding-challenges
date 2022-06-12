// Solution: Split The Bill
// https://www.codewars.com/kata/5641275f07335295f10000d0/
function splitTheBill(x) {
	let obj = {};
	let average = 0;
	for (let key in x) {
		average += x[key];
	}
	average /= Object.keys(x).length;
	for (let key in x) {
		if (x[key] - (average % 1) != 0) {
			obj[key] = Number((x[key] - average).toFixed(2));
		} else {
			obj[key] = x[key] - average;
		}
	}
	return obj;
}
