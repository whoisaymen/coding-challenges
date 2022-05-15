// Solution: Highest Rank Number in an Array
// https://www.codewars.com/kata/5420fc9bb5b2c7fd57000004/
function highestRank(arr) {
	let frequency = 0;
	let max = 0;
	let mostFrequentNum = 0;
	for (let i = 0; i < arr.length; i++) {
		for (let j = i + 1; j < arr.length; j++) {
			if (arr[i] === arr[j]) {
				frequency++;
			}
		}
		if (frequency > max) {
			max = frequency;
			mostFrequentNum = arr[i];
		}
		frequency = 0;
	}
	return mostFrequentNum;
}
