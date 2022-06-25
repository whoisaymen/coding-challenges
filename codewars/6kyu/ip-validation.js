// Solution: IP Validation
// https://www.codewars.com/kata/515decfd9dcfc23bb6000006/
function isValidIP(str) {
	if (str.split('.').length !== 4) return false;
	return (
		str
			.split('.')
			.map(Number)
			.filter((x) => x >= 0 && x < 256)
			.join('.') == str
	);
}
