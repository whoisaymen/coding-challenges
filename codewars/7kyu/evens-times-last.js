// Solution: Evens times last
// https://www.codewars.com/kata/5a1a9e5032b8b98477000004/
function evenLast(numbers) {
	return numbers.length > 1 ? numbers.filter((x, i) => i % 2 == 0).reduce((acc, c) => acc + c, 0) * numbers[numbers.length - 1] : 0;
}
