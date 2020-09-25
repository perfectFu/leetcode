/*
 * @lc app=leetcode.cn id=2 lang=javascript
 *
 * [2] 两数相加
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

function ListNode(val) {
	this.val = val;
	this.next = null;
}
var addTwoNumbers = function (l1, l2) {
	const dummyHead = new ListNode();
	let p = l1,
		q = l2,
		curr = dummyHead;
	let curry = 0; // 进位，判断两值相加是否超过10
	while (p !== null || q !== null) {
		let x = p !== null ? p.val : 0;
		let y = q !== null ? q.val : 0;
		let sum = x + y + curry;
		curry = parseInt(sum / 10); // 设置下一步的进位
		curr.next = new ListNode(sum % 10);
		curr = curr.next;
		if (p !== null) p = p.next;
		if (q !== null) q = q.next;
	}
	// 如果最后一位相加大于10
	if (curry > 0) {
		curr.next = new ListNode(curry);
	}
	return dummyHead.next;
};
// @lc code=end
