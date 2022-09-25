// Solution: Statistics for an Athletic Association
// https://www.codewars.com/kata/55b3425df71c1201a800009c/javascript
function stat(strg) {
	if (!strg) return '';
	let arr = strg
		.split(', ')
		.map((x) => x.split('|'))
		.map((x) => +x[0] * 60 * 60 + +x[1] * 60 + +x[2])
		.sort((a, b) => a - b);

	let range = `Range: ${secondsToHms(Math.max(...arr) - Math.min(...arr))}`;
	let average = `Average: ${secondsToHms(arr.reduce((acc, c) => +acc + +c, 0) / arr.length)}`;
	let median = `Median: ${secondsToHms(
		arr.length % 2 === 0 ? (arr[arr.length / 2] + arr[arr.length / 2 - 1]) / 2 : arr[Math.floor(arr.length / 2)]
	)}`;

	return `${range} ${average} ${median}`;
}

function secondsToHms(d) {
	d = Number(d);
	let h = String(Math.floor(d / 3600)).length > 1 ? Math.floor(d / 3600) : '0' + Math.floor(d / 3600);
	let m = String(Math.floor((d % 3600) / 60)).length > 1 ? Math.floor((d % 3600) / 60) : '0' + Math.floor((d % 3600) / 60);
	let s = String(Math.floor((d % 3600) % 60)).length > 1 ? Math.floor((d % 3600) % 60) : '0' + Math.floor((d % 3600) % 60);
	return `${h}|${m}|${s}`;
}
