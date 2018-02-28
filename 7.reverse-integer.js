/*
 * [7] Reverse Integer
 *
 * https://leetcode.com/problems/reverse-integer/description/
 *
 * algorithms
 * Easy (24.40%)
 * Total Accepted:    368.2K
 * Total Submissions: 1.5M
 * Testcase Example:  '123'
 *
 * Given a 32-bit signed integer, reverse digits of an integer.
 *
 * Example 1:
 *
 * Input: 123
 * Output:  321
 *
 *
 *
 * Example 2:
 *
 * Input: -123
 * Output: -321
 *
 *
 *
 * Example 3:
 *
 * Input: 120
 * Output: 21
 *
 *
 *
 * Note:
 * Assume we are dealing with an environment which could only hold integers
 * within the 32-bit signed integer range. For the purpose of this problem,
 * assume that your function returns 0 when the reversed integer overflows.
 *
 */
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function (x) {
	try {
		let result = parseInt((x + '').split('').reverse().join(''))

		if (result > 0x7FFFFFFF) {
			return 0
		} else if (x < 0) {
			result = -result
		}

		return result
	} catch (error) {
		return 0
	}
};

