// Solution: Leap Years
function isLeapYear(year) {
	if (year % 4 === 0 && year % 400 === 0) {
		return true;
	} else if (year % 100 === 0) {
		return false;
	} else if (year % 4 === 0 || year % 400 === 0) {
		return true;
	} else if (year % 4 === 0) {
		return true;
	} else {
		return false;
	}
}
