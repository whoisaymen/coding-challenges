// Solution: Break camelCase
function solution(string) {
	let arr = string.split("");
	let newArr = [];

	for (let i = 0; i < arr.length; i++) {
		if (arr[i] === arr[i].toUpperCase()) {
			newArr.push(" ");
			newArr.push(arr[i]);
		} else {
			newArr.push(arr[i]);
		}
	}

	return newArr.join("");
}
