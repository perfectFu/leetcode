/*
 * @lc app=leetcode.cn id=3 lang=javascript
 *
 * [3] 无重复字符的最长子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
// 采用滑动窗口方式实现
var lengthOfLongestSubstring = function (s) {
	const occ = new Set();
	const n = s.length;
	// 右指针，初始值为-1，相当于我们在字符串左边界的左侧还没有开始移动
	let rk = -1,
		ans = 0;
	for (let i = 0; i < n; i++) {
		if (i !== 0) {
			occ.delete(s.charAt(i - 1));
		}
		while (rk + 1 < n && !occ.has(s.charAt(rk + 1))) {
			occ.add(s.charAt(rk + 1));
			rk++;
		}
		console.log('occ:', occ);
		ans = Math.max(ans, rk - i + 1);
	}
	return ans;
};
lengthOfLongestSubstring('abcabcbb');
// @lc code=end
