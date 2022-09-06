// Triple trouble
// https://www.codewars.com/kata/55d5434f269c0c3f1b000058/javascript
function tripledouble(num1, num2) {
	num1 = String(num1);
	num2 = String(num2);
	let triple = 0;
	let arrTriples = [];
	for (let i = 0; i < num1.length - 1; i++) {
		if (num1[i] === num1[i + 1] && num1[i + 1] === num1[i + 2]) {
			triple = num1[i];
			arrTriples.push(triple);
		} else {
			continue;
		}
	}
	arrTriples = [...new Set(arrTriples)];

	for (let i = 0; i < arrTriples.length; i++) {
		for (let j = 0; j < num2.length - 1; j++) {
			if (num2[j] === arrTriples[i] && num2[j] === num2[j + 1]) {
				return 1;
			} else {
				continue;
			}
		}
	}

	return 0;
}
