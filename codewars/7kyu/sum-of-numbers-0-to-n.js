// Solution: Sum of numbers 0 to N
var SequenceSum = (function () {
	function SequenceSum() {}

	SequenceSum.showSequence = function (count) {
		let str = "";
		let sum = 0;
		for (let i = 0; i <= count; i++) {
			str += i + "+";
			sum += i;
		}
		return count > 0
			? str.slice(0, -1) + " = " + sum
			: count < 0
			? count + "<" + "0"
			: "0=0";
	};

	return SequenceSum;
})();
