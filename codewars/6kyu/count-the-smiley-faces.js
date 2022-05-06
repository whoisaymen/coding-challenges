// Solution: Count the smiley faces
//return the total number of smiling faces in the array
function countSmileys(arr) {
	return arr.filter(
		(x) =>
			x == ":)" ||
			x == ":-)" ||
			x == ":~)" ||
			x == ";-)" ||
			x == ";)" ||
			x == ";~)" ||
			x == ":D" ||
			x == ":-D" ||
			x == ":~D" ||
			x == ";D" ||
			x == ";-D" ||
			x == ";~D"
	).length;
}
