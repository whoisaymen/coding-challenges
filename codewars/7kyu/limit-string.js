// Limit string length - 1
// https://www.codewars.com/kata/5208fc3cb613bc725f000142/javascript
function solution(string, limit) {
	if (string.length <= limit) {
		return string;
	}
	return string.slice(0, limit) + '...';
}
