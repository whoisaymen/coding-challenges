// Solution: Encrypt this!
var encryptThis = function (text) {
	let arr = text.split(" ").map((x) => {
		if (x.length == 1) {
			return x[0].charCodeAt(0);
		} else if (x.length == 2) {
			return x[0].charCodeAt(0) + x[1];
		} else {
			return x[0].charCodeAt(0) + x[x.length - 1] + x.slice(2, -1) + x[1];
		}
	});
	return arr.join(" ");
};
