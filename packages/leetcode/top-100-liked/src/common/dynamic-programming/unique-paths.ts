/*
 * @lc app=leetcode id=62 lang=typescript
 *
 * [62] Unique Paths
 */

// @lc code=start
function uniquePaths(m: number, n: number): number {
  // 1、dp[i][j]: 表示到达位置(i,j)总共有n种不同的路径
  // 2、状态转移方程：机器人只能往下走和往右走，那么(i,j)位置只可能
  // 从(i, j-1)往右走一步达到，或者从(i-1,j)往下走一步达到。
  // 因此dp[i][j] = dp[i][j-1] + dp[i-1][j];

  // 3、dp初始化：dp[i][0]第一列每一行只能往下走，所以只有一种走法。dp[i][0] = 1.
  //            dp[0][i]第一行每一列只能往右走，所以只能一种走法,dp[0][i] = 1;

  const dp: number[][] = Array.from({ length: m + 1 }, () => new Array(n + 1).fill(0));

  for (let i = 1; i <= m; i++) {
    dp[i][1] = 1;
  }

  for (let i = 1; i <= n; i++) {
    dp[1][i] = 1;
  }

  for (let i = 2; i <= m; i++) {
    for (let j = 2; j <= n; j++) {
      dp[i][j] = dp[i][j - 1] + dp[i - 1][j];
    }
  }

  return dp[m][n];
};
// @lc code=end

/**
 * @group 动态规划
 */
export const unique_paths = uniquePaths;
