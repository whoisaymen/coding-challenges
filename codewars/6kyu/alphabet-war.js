// Alphabet war - airstrike - letters massacre
// Solution: https://www.codewars.com/kata/5938f5b606c3033f4700015a/javascript
function alphabetWar(fight) {
	let score = fight.split('');
	let scoreA = 0,
		scoreB = 0;

	for (let i = 0; i < score.length; i++) {
		if (score[i] === '*') {
			score[i - 1] = '_';
			score[i] = '_';
			if (score[i + 1] === '*') continue;
			else score[i + 1] = '_';
		}
	}

	score.forEach((x) => {
		if (x === 'w') scoreA += 4;
		else if (x === 'p') scoreA += 3;
		else if (x === 'b') scoreA += 2;
		else if (x === 's') scoreA++;
		else if (x === 'm') scoreB += 4;
		else if (x === 'q') scoreB += 3;
		else if (x === 'd') scoreB += 2;
		else if (x === 'z') scoreB++;
	});

	return scoreB > scoreA ? 'Right side wins!' : scoreA > scoreB ? 'Left side wins!' : "Let's fight again!";
}
