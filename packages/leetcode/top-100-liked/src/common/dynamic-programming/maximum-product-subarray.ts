/*
 * @lc app=leetcode id=152 lang=typescript
 *
 * [152] Maximum Product Subarray
 */

// @lc code=start

// #region code
function maxProduct(nums: number[]): number {
  // 维护两个dp，其中minDp[i]代表以i为终点的子数组的最小乘积，maxDp[i]代表以i为终点的子数组的最大乘积
  // 这道题不同于其他题是，状态的转移不是从前一个位置转移过来的。不具有最优子结构。
  // 按照惯性思维，会直接想到Math.max(dp[i-1] * nums[i], nums[i])，但是dp[i-1] * nums[i]不一定能推出最大值。
  // 比如这个数组[-2,4,-3], dp[1] = 4, dp[2] = -3是错的，正确dp[2] = -2 * 4 * -3 = 24。原因是没记住前面的乘积最小子数组，它的存在可能让整个值变大

  const minDp: number[] = [];
  const maxDp: number[] = [];

  minDp[0] = nums[0];
  maxDp[0] = nums[0];

  for (let i = 1; i < nums.length; i++) {
    maxDp[i] = Math.max(nums[i], minDp[i - 1] * nums[i], maxDp[i - 1] * nums[i]);
    minDp[i] = Math.min(nums[i], minDp[i - 1] * nums[i], maxDp[i - 1] * nums[i]);
  }

  return Math.max(...maxDp);
};
// #endregion code

// @lc code=end

/**
 * {@include ../../../../../../.typedoc/leetcode/152.乘积最大子数组/problem.md}
 * @group 动态规划
 * @summary {@include ../../../../../../.typedoc/leetcode/152.乘积最大子数组/summary.md}
 */
export const maximum_product_subarray = maxProduct;
