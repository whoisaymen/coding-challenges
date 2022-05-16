// Solution: All Star Code Challenge #22
// https://www.codewars.com/kata/5865cff66b5699883f0001aa/
function toTime(seconds) {
	let hours = Math.floor(seconds / 3600);
	let minutes = Math.floor((seconds / 3600 - Math.floor(seconds / 3600)) * 60);
	return `${hours} hour(s) and ${minutes} minute(s)`;
}
