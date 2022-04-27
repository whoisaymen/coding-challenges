// Solution: My language skills
function myLanguages(results) {
	let entries = Object.entries(results);
	let sorted = entries.sort((a, b) => b[1] - a[1]).filter((n) => n[1] >= 60);
	return sorted.map((n) => n[0]);
}
