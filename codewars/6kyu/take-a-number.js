// Take a Number And Sum Its Digits Raised To The Consecutive Powers And ....¡Eureka!!
// https://www.codewars.com/kata/5626b561280a42ecc50000d1/javascript
function sumDigPow(a, b) {
	let arr = [];
	let power = 0;
	for (let i = a; i <= b; i++) {
		for (let j = 0; j < String(i).length; j++) {
			power += Math.pow(String(i)[j], j + 1);
		}
		if (power === i) {
			arr.push(power);
		}
		power = 0;
	}
	return arr;
}
