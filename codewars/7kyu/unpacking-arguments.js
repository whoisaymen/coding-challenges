// Solution: Unpacking Arguments
// https://www.codewars.com/kata/540de1f0716ab384b4000828/

function spread(func, args) {
	return func.apply(this, args);
}
