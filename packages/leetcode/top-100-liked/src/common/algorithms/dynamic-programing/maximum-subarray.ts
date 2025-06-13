/*
 * @lc app=leetcode id=53 lang=typescript
 *
 * [53] Maximum Subarray
 */

// @lc code=start
function maxSubArray(nums: number[]): number {
  // 1、dp[i]: 以第i个元素为结尾的子数组的最大和为dp[i]
  // 2、递推公式：
  //    dp[i] = max(dp[i-1] + nums[i], nums[i])
  //    即：对于每个位置，我们有两个选择：
  //    1) 接续前面的子数组：dp[i-1] + nums[i]
  //    2) 从当前位置重新开始：nums[i]
  //    取这两种情况中的最大值

  // 3、dp初始化
  //    dp[0] = nums[0]

  const dp: number[] = [];
  dp[0] = nums[0];
  let max = dp[0];

  for (let i = 1; i < nums.length; i++) {
    dp[i] = Math.max(dp[i - 1] + nums[i], nums[i]);
    max = Math.max(dp[i], max);
  }

  return max;
};
// @lc code=end

export const maximum_subarray = maxSubArray;
