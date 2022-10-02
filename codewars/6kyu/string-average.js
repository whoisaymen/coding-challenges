// Solution: String average
// https://www.codewars.com/kata/5966847f4025872c7d00015b/javascript
let numbers = {
	zero: 0,
	one: 1,
	two: 2,
	three: 3,
	four: 4,
	five: 5,
	six: 6,
	seven: 7,
	eight: 8,
	nine: 9,
};

function averageString(str) {
	let avg = Math.floor(
		str
			.split(' ')
			.map((x) => (x = numbers[x]))
			.reduce((acc, c) => acc + c, 0) / str.split(' ').length
	);
	return avg || avg === 0 ? Object.keys(numbers).find((key) => numbers[key] === avg) : 'n/a';
}
