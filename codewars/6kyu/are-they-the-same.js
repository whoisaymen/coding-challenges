// Solution: Are they the 'same'?
// https://www.codewars.com/kata/550498447451fbbd7600041c/
function comp(array1, array2) {
	console.log(array1, array2);
	if (array1 == [] || array2 == [] || array1 == null || array2 == null)
		return false;
	array1 = array1.sort((a, b) => a - b);
	array2 = array2.sort((a, b) => a - b);
	return (
		array1.length === array2.length &&
		array1.map((x) => x ** 2).every((val, index) => val === array2[index])
	);
}
