/*
 * @lc app=leetcode id=152 lang=typescript
 *
 * [152] Maximum Product Subarray
 */

// @lc code=start
function maxProduct(nums: number[]): number {
  // dp[i]： 表示以nums[i]为结尾的子数组的最大乘积
  // 状态转移方程：
  //       1. 如果以nums[i-1]结尾的子数组的最大乘积是正数，同时nums[i]是正数，那么dp[i] = dp[i-1] * nums[i]
  //       2. 如果以nums[i-1]结尾的子数组的最大乘积是负数，同时nums[i]是负数，那么dp[i] = dp[i-1] * nums[i]
  //       3. 如果以nums[i-1]结尾的子数组的最大乘积是正数，同时nums[i]是负数，那么dp[i] = dp[i-1]
  //       4. 如果以nums[i-1]结尾的子数组的最大乘积是负数，同时nums[i]是正数，那么dp[i] = nums[i]

  // dp[0] = nums[0]

  const dp: number[] = [];
  dp[0] = nums[0];

  let max = dp[0];

  for (let i = 1; i < nums.length; i++) {
    if (dp[i - 1] >= 0 && nums[i] >= 0) {
      dp[i] = dp[i - 1] * nums[i];
    }
    else if (dp[i - 1] >= 0 && nums[i] < 0) {
      dp[i] = dp[i - 1];
    }
    else if (dp[i - 1] < 0 && nums[i] >= 0) {
      dp[i] = nums[i];
    }
    else {
      dp[i] = dp[i - 1] * nums[i];
    }

    max = Math.max(dp[i], max);
  }

  return max;
};
// @lc code=end

/**
 * @group 动态规划
 * @document ../../../../../../.typedoc/problems/152.乘积最大子数组.md
 */
export const maximum_product_subarray = maxProduct;
