// Solution: Srot the inner ctonnet in dsnnieedcg oredr
// https://www.codewars.com/kata/5898b4b71d298e51b600014b/javascript
function sortTheInnerContent(words) {
	return words
		.split(' ')
		.map((x) => {
			if (x.length > 1)
				return (
					x.split('')[0] +
					x
						.slice(1, x.length - 1)
						.split('')
						.sort((a, b) => a.localeCompare(b))
						.reverse()
						.join('') +
					x[x.length - 1]
				);
			else return x;
		})
		.join(' ');
}
