// Solution: Inside Out Strings
// https://www.codewars.com/kata/57ebdf1c2d45a0ecd7002cd5/javascript
function insideOut(x) {
	return x
		.split(' ')
		.map((x) => {
			if (x.length % 2 == 0) {
				return (x =
					x
						.slice(0, x.length / 2)
						.split('')
						.reverse()
						.join('') +
					x
						.slice(x.length / 2)
						.split('')
						.reverse()
						.join(''));
			} else {
				return (x = x =
					x
						.slice(0, x.length / 2)
						.split('')
						.reverse()
						.join('') +
					x
						.slice(x.length / 2, x.length / 2 + 1)
						.split('')
						.reverse()
						.join('') +
					x
						.slice(x.length / 2 + 1)
						.split('')
						.reverse()
						.join(''));
			}
		})
		.join(' ');
}
