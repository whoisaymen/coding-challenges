// Solution: All unique
// https://www.codewars.com/kata/553e8b195b853c6db4000048/javascript
function hasUniqueChars(str) {
	return [...new Set(str)].join('') === str;
}
