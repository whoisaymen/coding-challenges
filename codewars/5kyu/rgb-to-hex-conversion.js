// Solution: RGB To Hex Conversion
// https://www.codewars.com/kata/513e08acc600c94f01000001/

function rgb(r, g, b) {
	if (r > 255) {
		r = 255;
	} else if (r < 0) {
		r = 0;
	}
	if (g > 255) {
		g = 255;
	} else if (g < 0) {
		g = 0;
	}
	if (b > 255) {
		b = 255;
	} else if (b < 0) {
		b = 0;
	}
	return (
		r.toString(16).toUpperCase().padStart(2, "0") +
		g.toString(16).toUpperCase().padStart(2, "0") +
		b.toString(16).toUpperCase().padStart(2, "0")
	);
}
