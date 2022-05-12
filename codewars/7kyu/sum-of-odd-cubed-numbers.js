// Solution: Sum of Odd Cubed Numbers
function cubeOdd(arr) {
	for (let i = 0; i < arr.length; i++) {
		if (typeof arr[i] !== "number") {
			return undefined;
		}
	}

	return arr
		.map((x) => x ** 3)
		.filter((x) => x % 2 != 0)
		.reduce((acc, c) => acc + c, 0);
}
