// Solution: Series of integers from m to n
// https://www.codewars.com/kata/5841f680c5c9b092950001ae/
function generateIntegers(m, n) {
	var arr = [];
	while (m <= n) {
		arr.push(m);
		m++;
	}
	return arr;
}
