// Solution: Looking for a benefactor
// https://www.codewars.com/kata/569b5cec755dd3534d00000f/
function newAvg(arr, newavg) {
	if (arr.length < 1) return newavg;
	let expectedDonation = Math.ceil(
		newavg * (arr.length + 1) - arr.reduce((acc, c) => acc + c, 0)
	);
	if (expectedDonation < 0) throw new Error("Error!");
	return expectedDonation;
}
