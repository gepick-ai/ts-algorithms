/*
 * @lc app=leetcode id=279 lang=typescript
 *
 * [279] Perfect Squares
 */

// @lc code=start

// #region code
function numSquares(n: number): number {
  // 先找出所有小于等于n的完全平方数
  const nums: number[] = [];

  // 1、4、9 和 16 都是完全平方数，其实相当于从1数，每个数不断平方就是完全平方数
  for (let i = 1; i <= n; i++) {
    const num = i * i;

    if (num > n) {
      break;
    }

    nums.push(num);
  }

  // dp[i][j]表示考虑用前i种物品装满容量j所能获得的最小价值
  // 状态转移方程：考虑最后是否选取物品i
  // 选取物品i，则dp[i][j] = dp[i][j- nums[i]] + 1;
  // 不选取物品i，则dp[i][j] = dp[i-1][j];
  // 但选取i的前提是i的体积要小于等于j
  // 因此最终方程为 dp[i][j] = Math.min(dp[i][j - nums[i]] + 1, dp[i-1][j])

  const dp: number[][] = Array.from({ length: nums.length }, () => new Array(n + 1).fill(0));

  // 选取dp[0][j]
  for (let j = 1; j <= n; j++) {
    dp[0][j] = j;
  }

  // 枚举每种背包容量，直到n
  for (let j = 1; j <= n; j++) {
    // 枚举物品i，选取i和不选取i的情况下，装满当前背包的最小数量
    for (let i = 1; i < nums.length; i++) {
      dp[i][j] = j >= nums[i] ? Math.min(dp[i][j - nums[i]] + 1, dp[i - 1][j]) : dp[i - 1][j];
    }
  }

  return dp[nums.length - 1][n];
};

// #endregion code

// @lc code=end

/**
 * {@include ../../../../../../.typedoc/leetcode/279.完全平方数/problem.md}
 *
 * @description
 * {@includeCode ./perfect-squares.ts/#code}
 * @group 动态规划
 * @summary {@include ../../../../../../.typedoc/leetcode/279.完全平方数/summary.md}
 */
export const perfect_squares = numSquares;
