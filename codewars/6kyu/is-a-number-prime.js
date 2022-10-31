// Is a number prime?
// https://www.codewars.com/kata/5262119038c0985a5b00029f/javascript
function isPrime(num) {
	if (num === 0 || num === 1 || num < 0) return false;
	for (let i = 2; i < 100000; i++) {
		if (num % i == 0 && i !== num) {
			return false;
		}
	}

	return true;
}
