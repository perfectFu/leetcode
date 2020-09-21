/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

// 时间复杂度O(n)
var twoSum = function (nums, target) {
	const map = new Map();
	let diff, ret;
	nums.some((ele, i) => {
		diff = target - ele;
		if (map.get(ele) !== void 0) {
			ret = [map.get(ele), i];
			return true;
		} else {
			map.set(diff, i);
		}
	});
	return ret;
};
// @lc code=end

// console.log(twoSum([2, 7, 11, 15], 9));
