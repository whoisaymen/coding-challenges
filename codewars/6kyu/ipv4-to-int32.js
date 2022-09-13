// Solution: IPv4 to int32
// https://www.codewars.com/kata/52ea928a1ef5cfec800003ee/javascript
function ipToInt32(ip) {
	let binary = ip
		.split('.')
		.map(Number)
		.map((x) => x.toString(2))
		.map((x) => (x.length < 8 ? '0'.repeat(8 - x.length) + x.toString(2) : x.toString(2)))
		.join('');

	return parseInt(binary, 2);
}
