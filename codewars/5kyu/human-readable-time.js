// Solution: Human Readable Time
// https://www.codewars.com/kata/52685f7382004e774f0001f7

function humanReadable(seconds) {
	let hours = Math.floor(seconds / 3600);
	let minutes = Math.floor((seconds - hours * 3600) / 60);
	seconds = seconds - hours * 3600 - minutes * 60;
	return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(
		2,
		"0"
	)}:${String(seconds).padStart(2, "0")}`;
}
