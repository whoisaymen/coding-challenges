// Solution: Incrementer
// https://www.codewars.com/kata/590e03aef55cab099a0002e8/
function incrementer(nums) {
	for (let i = 0; i < nums.length; i++) {
		if (nums[i] + i + 1 > 9) {
			nums[i] += i + 1;
			nums[i] = +String(nums[i])[1];
		} else {
			nums[i] += i + 1;
		}
	}
	return nums;
}
