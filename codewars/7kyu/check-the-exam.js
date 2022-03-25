// Solution: check the exam
function checkExam(array1, array2) {
	let score = 0;
	for (let i = 0; i < array1.length; i++) {
		if (!array2[i].length) {
			continue;
		} else if (array1[i] === array2[i]) {
			score += 4;
		} else if (array1[i] !== array2[i]) {
			score--;
		}
	}
	return score >= 0 ? score : 0;
}
