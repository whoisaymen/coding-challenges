// Solution: Pete, the baker
// https://www.codewars.com/kata/525c65e51bf619685c000059/javascript
function cakes(recipe, available) {
	let ratios = [];

	for (item in recipe) {
		let ratio = Math.floor(available[item] / recipe[item]);
		ratios.push(ratio);

		if (available[item] === undefined) return 0;
	}

	return Math.min(...ratios);
}
