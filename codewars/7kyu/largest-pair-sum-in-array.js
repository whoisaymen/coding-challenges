// Solution: Largest pair sum in array
function largestPairSum(numbers) {
	let sortedArr = numbers.sort((a, b) => b - a);
	return sortedArr[0] + sortedArr[1];
}
