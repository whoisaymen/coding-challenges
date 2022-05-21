// Solution: Coding Meetup #13 - Higher-Order Functions Series - Is the meetup language-diverse?
// https://www.codewars.com/kata/58381907f8ac48ae070000de/
function isLanguageDiverse(list) {
	let pythonDevs = list.filter((x) => x.language == "Python").length;
	let jsDevs = list.filter((x) => x.language == "JavaScript").length;
	let rubyDevs = list.filter((x) => x.language == "Ruby").length;
	return (
		Math.max(pythonDevs, jsDevs, rubyDevs) <=
		Math.min(pythonDevs, jsDevs, rubyDevs) * 2
	);
}
