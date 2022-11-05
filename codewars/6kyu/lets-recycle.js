// Let's Recycle!
// https://www.codewars.com/kata/5b6db1acb118141f6b000060/javascript
function recycle(array) {
	let paper = [],
		glass = [],
		organic = [],
		plastic = [],
		output = [];

	array.forEach((x) => {
		if (x.material === 'paper' || x.secondMaterial === 'paper') paper.push(x.type);
		if (x.material === 'glass' || x.secondMaterial === 'glass') glass.push(x.type);
		if (x.material === 'organic' || x.secondMaterial === 'organic') organic.push(x.type);
		if (x.material === 'plastic' || x.secondMaterial === 'plastic') plastic.push(x.type);
	});

	output.push(paper, glass, organic, plastic);
	return output;
}
