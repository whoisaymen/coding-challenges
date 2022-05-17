// Solution: V A P O R C O D E
// https://www.codewars.com/kata/5966eeb31b229e44eb00007a/
function vaporcode(string) {
	return string.split(" ").join("").toUpperCase().split("").join("  ");
}
