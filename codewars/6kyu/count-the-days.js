// Solution: Count the days!
// https://www.codewars.com/kata/5837fd7d44ff282acd000157/javascript
function countDays(d) {
	let date = new Date();
	let days = Math.round((d - date) / 86400000);

	return days < 0 ? 'The day is in the past!' : days > 0 ? `${days} days` : 'Today is the day!';
}
