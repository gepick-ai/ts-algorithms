/*
 * @lc app=leetcode id=53 lang=typescript
 *
 * [53] Maximum Subarray
 */

// @lc code=start

// #region code
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

// #endregion code

// @lc code=end

/**
 * {@include ../../../../../../.typedoc/problems/53.最大子数组和.md}
 *
 * @description
 * {@includeCode ./maximum-subarray.ts/#code}
 *
 * @group 动态规划
 * @summary #### 53.最大子数组和 ✅
 *
 * 以i为终点的子数组，要么与它前面的子数组拼接成一个和更大的子数组，要么就是以i本身为开头和终点的子数组，两者取最大的和就是以i为终点的最大子数组和。
 */
export const maximum_subarray = maxSubArray;
