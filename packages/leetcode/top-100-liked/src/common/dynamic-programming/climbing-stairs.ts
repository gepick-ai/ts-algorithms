/*
 * @lc app=leetcode id=70 lang=typescript
 *
 * [70] Climbing Stairs
 */

// @lc code=start
function climbStairs(n: number): number {
  // 爬到n阶，你可以从n-1爬1步上来，也可以从n-2直接爬2步上来
  // 设dp[i]，定义为爬上i阶总共有dp[i]种方法
  // 递推公式: dp[n] = dp[n-1] + dp[n-2]
  // dp[i]初始化
  // dp[0] = 1;
  // dp[1] = 1;

  const dp: number[] = [];
  dp[0] = 1;
  dp[1] = 1;

  for (let i = 2; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }

  return dp[n];
};
// @lc code=end

/**
 * {@include ../../../../../../.typedoc/problems/70.爬楼梯.md}
 *
 * @group 动态规划
 */
export const climbing_stairs = climbStairs;
