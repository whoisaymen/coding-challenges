// Solution: Fizz Buzz
function fizzbuzz(n) {
	let arr = [];
	for (let i = 1; i <= n; i++) {
		arr.push(i);
	}

	return arr.map((n) =>
		n % 3 === 0 && n % 5 === 0
			? "FizzBuzz"
			: n % 5 === 0
			? "Buzz"
			: n % 3 === 0
			? "Fizz"
			: n
	);
}
