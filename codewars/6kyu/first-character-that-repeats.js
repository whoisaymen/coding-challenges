// Solution: first character that repeats
// https://www.codewars.com/kata/54f9f4d7c41722304e000bbb/javascript
function firstDup(s) {
	for (let i = 0; i < s.length; i++) {
		if (s.slice(i + 1).includes(s[i])) return s[i];
	}
	return undefined;
}
