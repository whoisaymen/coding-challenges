// Solution: Enumerable Magic #5- True for Just One?
// https://www.codewars.com/kata/54599705cbae2aa60b0011a4/
function one(arr, fun) {
	return arr.filter(fun).length === 1;
}
