// Solution: Coding Meetup #11 - Higher-Order Functions Series - Find the average age
// https://www.codewars.com/kata/582ba36cc1901399a70005fc/javascript
function getAverageAge(list) {
	let length = Object.keys(list).length;
	let sum = 0;
	list.forEach((x) => {
		sum += x.age;
	});
	return Math.round(sum / length);
}
