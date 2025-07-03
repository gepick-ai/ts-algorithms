/*
 * @lc app=leetcode id=322 lang=typescript
 *
 * [322] Coin Change
 */

// @lc code=start

// #region code
function coinChange(coins: number[], amount: number): number {
  /**
 * - 背包
 * - 容量：amount
 * - 物品：coins
 * - 物品的体积：coins[i]
 * - 物品的价值：1
 *
 * - dp[i][j]表示使用前i个物品凑满容量j所需要的最小数量
 * - 不选物品i，则dp[i][j] = dp[i-1][j]
 * - 选物品i，则如果coins[i] > j ，则dp[i][j] = dp[i-1][j]。否则dp[i][j] = dp[i][j - coins[i]] + 1
 * 综上状态转移方程为dp[i][j] = j >= coins[i] ? Math.min(dp[i][j - coins[i]] + 1, dp[i-1][j]) : dp[i-1][j]
 *
 * 当i=0时，dp[i][j] = dp[0][j]表示用物品0凑满j所需的最小数量，dp[0][j] = j
 *
 *
     */

  const dp: number[][] = Array.from({ length: coins.length }, () => new Array(amount + 1).fill(Infinity));

  for (let i = 0; i < coins.length; i++) {
    dp[i][0] = 0;
  }

  for (let j = 1; j <= amount; j++) {
    if (j >= coins[0] && j % coins[0] === 0) {
      dp[0][j] = j / coins[0];
    }
  }

  for (let j = 1; j <= amount; j++) {
    for (let i = 1; i < coins.length; i++) {
      dp[i][j] = j >= coins[i] ? Math.min(dp[i][j - coins[i]] + 1, dp[i - 1][j]) : dp[i - 1][j];
    }
  }

  return dp[coins.length - 1][amount] === Infinity ? -1 : dp[coins.length - 1][amount];
};

// #endregion code
// @lc code=end

/**
 * {@include ../../../../../../.typedoc/leetcode/322.零钱兑换/problem.md}
 *
 * @description
 * {@includeCode ./coin-change.ts/#code}
 * @group 动态规划
 * @summary {@include ../../../../../../.typedoc/leetcode/322.零钱兑换/summary.md}
 */
export const coin_change = coinChange;
