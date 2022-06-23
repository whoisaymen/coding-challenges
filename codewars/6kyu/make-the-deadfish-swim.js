// Solution: Make the Deadfish Swim
// https://www.codewars.com/kata/51e0007c1f9378fa810002a9/solutions/javascript
function parse(data) {
	let result = 0;
	let arr = [];
	for (let i = 0; i < data.length; i++) {
		if (data[i] === 'i') result += 1;
		else if (data[i] === 'd') result -= 1;
		else if (data[i] === 's') result = result ** 2;
		else if (data[i] === 'o') arr.push(result);
		else continue;
	}
	return arr;
}
