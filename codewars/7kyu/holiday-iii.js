// Solution: Holiday III - Fire on the boat
// https://www.codewars.com/kata/57e8fba2f11c647abc000944/javascript
function fireFight(s) {
	while (s.includes('Fire')) {
		s = s.replace('Fire', '~~');
	}
	return s;
}
