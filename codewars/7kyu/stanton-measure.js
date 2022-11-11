// Solution: Stanton mesure
// https://www.codewars.com/kata/59a1cdde9f922b83ee00003b/javascript
const stantonMeasure = (integer) => {
	let freq1 = integer.filter((x) => x === 1).length;
	return integer.filter((x) => x === freq1).length;
};
