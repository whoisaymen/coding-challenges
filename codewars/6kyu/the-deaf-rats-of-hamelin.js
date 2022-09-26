// Solution: The Deaf Rats of Hamelin
// https://www.codewars.com/kata/598106cb34e205e074000031/javascript

var countDeafRats = function (town) {
	let deafs = [],
		normals = [],
		posP = town.indexOf('P');

	for (let i = 0; i < town.length; i++) {
		if (i <= posP) {
			if (town[i] === 'O' && town[i + 1] === '~') {
				deafs.push('x');
				i++;
			} else if (town[i] === '~' && town[i + 1] === 'O') {
				normals.push('x');
				i++;
			}
		} else {
			if (town[i] === 'O' && town[i + 1] === '~') {
				normals.push('x');
				i++;
			} else if (town[i] === '~' && town[i + 1] === 'O') {
				deafs.push('x');
				i++;
			}
		}
	}

	return deafs.length;
};
