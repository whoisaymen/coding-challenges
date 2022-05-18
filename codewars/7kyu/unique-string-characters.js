// Solution: Unique string characters
// https://www.codewars.com/kata/5a262cfb8f27f217f700000b/
function solve(a, b) {
	let str = "";
	for (let i = 0; i < a.length; i++) {
		if (!b.includes(a[i])) str += a[i];
	}
	for (let i = 0; i < b.length; i++) {
		if (!a.includes(b[i])) str += b[i];
	}
	return str;
}
