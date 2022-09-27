// Solution: Rainfall
// https://www.codewars.com/kata/56a32dd6e4f4748cc3000006/javascript
function mean(town, strng) {
	let cities = strng.split('\n').map((x) => x.split(':'));
	let cityData = '';
	for (item in cities) {
		if (cities[item][0] === town) {
			cityData = cities[item];
		} else {
		}
	}
	if (!cityData) return -1;

	let mean =
		cityData[1]
			.split(',')
			.map((x) => x.split(' ')[1])
			.reduce((acc, c) => +acc + +c, 0) / 12;
	let variance =
		cityData[1]
			.split(',')
			.map((x) => x.split(' ')[1])
			.map((x) => Math.pow(+x - mean, 2))
			.reduce((acc, c) => acc + c, 0) / 12;
	return mean;
}
function variance(town, strng) {
	let cities = strng.split('\n').map((x) => x.split(':'));
	let cityData = '';
	for (item in cities) {
		if (cities[item][0] === town) {
			cityData = cities[item];
		}
	}
	if (!cityData) return -1;

	let mean =
		cityData[1]
			.split(',')
			.map((x) => x.split(' ')[1])
			.reduce((acc, c) => +acc + +c, 0) / 12;
	let variance =
		cityData[1]
			.split(',')
			.map((x) => x.split(' ')[1])
			.map((x) => Math.pow(+x - mean, 2))
			.reduce((acc, c) => acc + c, 0) / 12;
	return variance;
}
