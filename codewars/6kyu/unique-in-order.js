// Solution: Unique In Order
// https://www.codewars.com/kata/54e6533c92449cc251001667/
var uniqueInOrder = function (iterable) {
	//   if (typeof Array.isArray(iterable)) return [... new Set (iterable)];
	let arr = [];
	arr.push(iterable[0]);

	for (let i = 0; i < iterable.length - 1; i++) {
		if (iterable[i + 1] === iterable[i]) continue;
		else arr.push(iterable[i + 1]);
	}
	return iterable ? arr : [];
};
