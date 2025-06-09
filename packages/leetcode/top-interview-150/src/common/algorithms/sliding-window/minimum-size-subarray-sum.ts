/*
 * @lc app=leetcode id=209 lang=typescript
 *
 * [209] Minimum Size Subarray Sum
 */

// @lc code=start
function minSubArrayLen(target: number, nums: number[]): number {
  let left = 0;
  let right = 0;
  let min = nums.length + 1; // 初始化为数组长度+1
  let sum = 0; // 初始化为0

  // 使用滑动窗口
  while (right < nums.length) {
    // 右指针向右移动，累加和
    sum += nums[right];

    // 当和大于等于目标值时，尝试缩小窗口
    while (sum >= target) {
      // 更新最小长度
      min = Math.min(right - left + 1, min);
      // 左指针向右移动，减去左边的数
      sum -= nums[left];
      left++;
    }

    right++;
  }

  // 如果没有找到满足条件的子数组，返回0
  return min > nums.length ? 0 : min;
}
// @lc code=end

/**
 * 具有单调性才能使用滑动窗口，题目说了一定是正数，那么如果前几个数都大于target了，再加上一个新的正数肯定也大于target。
 * 但是题目要的是最短子数组，所以在满足条件的基础上继续加正数没啥意义。直接left往右跑，尝试下新窗口里头的总和是否满足条件。
 * 滑动窗口可以看成是暴力解法的优化，记忆了之前遍历过的结果。不再需要每次都从0开始遍历。
 */
export const minimum_size_subarray_sum = minSubArrayLen;
