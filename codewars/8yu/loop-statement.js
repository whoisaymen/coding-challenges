// Solution: Training JS #9: loop statement --while and do..while
// https://www.codewars.com/kata/57216d4bcdd71175d6000560/
function padIt(str, n) {
	let count = 0;
	while (n > 0) {
		if (count % 2 == 0) {
			str = "*" + str;
		} else {
			str += "*";
		}
		n--;
		count++;
	}
	return str;
}
