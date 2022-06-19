// Solution: Basic Math (Add or Subtract)
// https://www.codewars.com/kata/5809b62808ad92e31b000031/
function calculate(str) {
	return eval(str.split('plus').join('+').split('minus').join('-')).toString();
}
