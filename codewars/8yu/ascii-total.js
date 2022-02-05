// Solution: ASCII total
function uniTotal(string) {
	let str = 0;
	for (let i = 0; i < string.length; i++) {
		str += Number(string.charCodeAt(i));
	}
	return str;
}
