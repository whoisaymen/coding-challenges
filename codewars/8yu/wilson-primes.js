// Solution: Wilson primes
function factorialize(num) {
	if (num < 0) return -1;
	else if (num == 0) return 1;
	else {
		return num * factorialize(num - 1);
	}
}

function amIWilson(p) {
	let eq = (factorialize(p - 1) + 1) / (p * p);
	return eq - Math.floor(eq) !== 0 ? false : true;
}
