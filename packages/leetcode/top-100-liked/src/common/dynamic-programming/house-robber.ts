/*
 * @lc app=leetcode id=198 lang=typescript
 *
 * [198] House Robber
 */

// @lc code=start
function rob(nums: number[]): number {
  // 1、dp[i]：考虑偷包括i在内的前i间的最大金额是dp[i]
  // 2、递推公式：
  //       1. 如果偷第i间，那么不能偷第i-1间，则最大金额应该是dp[i-2] + nums[i]
  //       2. 如果不偷第i间，则最大金额应该是dp[i-1];
  //       所以dp[i] = Math.max(dp[i-1], dp[i-2] + nums[i])
  // 3、dp初始化：
  //       1. dp[0] 考虑偷前1间屋子最大金额就是nums[0], dp[0] = nums[0]
  //       2. dp[1] 考虑偷前2间屋子最大金额就是偷第0间不偷第1间，偷第1间不偷第0间，dp[1] = Math.max(nums[0], nums[1])

  const dp: number[] = new Array(nums.length).fill(0);

  dp[0] = nums[0];

  if (nums.length > 1) {
    dp[1] = Math.max(nums[0], nums[1]);
  }

  for (let i = 2; i < nums.length; i++) {
    dp[i] = Math.max(dp[i - 1], dp[i - 2] + nums[i]);
  }

  return dp[nums.length - 1];
};
// @lc code=end

/**
 * @group 动态规划
 * @document ../../../../../../.typedoc/problems/198.打家劫舍.md
 */
export const house_robber = rob;
