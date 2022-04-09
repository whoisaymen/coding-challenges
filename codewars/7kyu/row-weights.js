// Solution: Row weights
function rowWeights(array) {
	let team1 = 0;
	let team2 = 0;
	for (let i = 0; i < array.length; i++) {
		for (let j = array[i]; j > 0; j--) {
			if (i % 2 == 0) {
				team1++;
			} else {
				team2++;
			}
		}
	}
	return [team1, team2];
}
