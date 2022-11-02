// The Office V - Find a Chair
// https://www.codewars.com/kata/57f6051c3ff02f3b7300008b/javascript
function meeting(x, need) {
	let arr = [],
		sum = 0,
		chairsNeeded = need;

	for (let i = 0; i < x.length; i++) {
		let chairsAvailable = x[i][1] - x[i][0].length;

		if (need > 0) {
			if (chairsAvailable > 0) {
				need -= chairsAvailable;
				if (need < 0) {
					arr.push(chairsAvailable + need);
				} else {
					arr.push(chairsAvailable);
				}
			} else {
				arr.push(0);
			}
		} else {
			break;
		}
	}
	sum = arr.reduce((acc, c) => acc + c, 0);
	return arr.length < 1 ? 'Game On' : sum < chairsNeeded ? 'Not enough!' : arr;
}
