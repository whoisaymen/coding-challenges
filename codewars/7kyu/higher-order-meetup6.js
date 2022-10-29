// Coding Meetup #6 - Higher-Order Functions Series - Can they code in the same language?
// https://www.codewars.com/kata/58287977ef8d4451f90001a0/javascript
function isSameLanguage(list) {
	let language = list[0].language;
	return list.every((x) => x.language === language);
}
