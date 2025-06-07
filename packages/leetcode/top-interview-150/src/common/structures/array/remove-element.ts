/*
 * @lc app=leetcode id=27 lang=typescript
 *
 * [27] Remove Element
 */

// @lc code=start
function removeElement(nums: number[], val: number): number {
  // 设计快慢指针fast、slow
  // slow一开始在整个数组的最左边-1位置
  // fast一开始在整个数组的0位置

  let fast = 0;
  let slow = -1;

  // 我们让快指针往右边移动，移动前检查当前位置的数与val是否一致：
  // 1.如果不一致，那么快指针所指当前位置的数往慢指针slow的+1位置发放，然后slow往右边移动一下，表示slow所指位置数是最后一个不为val的数，然后fast往右边移动
  // 2.如果一致，说明当前fast所指的位置是重复元素，不管它，fast直接往右边移动
  // 重复上述过程直到fast指针走完整个数组

  while (fast < nums.length) {
    const curNum = nums[fast];

    if (curNum !== val) {
      nums[++slow] = curNum;
    }

    fast++;
  }

  return slow + 1; // 答案数组的最后一个位置 + 1才是整个答案数组长度
};
// @lc code=end

/**
 * 原地操作数组就想“快慢指针”，快指针遍历数组，慢指针记录答案数组的位置
 */
export const remove_element = removeElement;
