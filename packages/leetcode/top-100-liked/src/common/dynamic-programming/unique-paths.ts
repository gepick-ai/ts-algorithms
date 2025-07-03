/*
 * @lc app=leetcode id=62 lang=typescript
 *
 * [62] Unique Paths
 */

// @lc code=start

// #region code
function uniquePaths(m: number, n: number): number {
  // dp[i][j]表示机器人来到第i行第j列的不同路径总数

  // 状态转移方程：
  // 由于机器人只能够从(i-1,j)向下走一步达到(i,j)，或者从(i, j-1)向右走一步达到(i,j)
  // 因此dp[i][j] = dp[i-1][j] + dp[i][j-1];

  // 初始化
  // 机器人在(0,j)，那么从(0,0)出发，只有向右一条路径可走
  // 机器人在(i, 0),那么从(0,0)出发，只有向下一条路径可走
  const dp: number[][] = Array.from({ length: m }, () => new Array(n).fill(1));

  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      dp[i][j] = dp[i - 1][j] + dp[i][j - 1];
    }
  }

  return dp[m - 1][n - 1];
};
// #endregion code

// @lc code=end

/**
 * {@include ../../../../../../.typedoc/problems/62.不同路径.md}
 *
 * @answer 
 * 
 * {@include ../../../../../../.typedoc/notes/62.不同路径.md}
 * {@includeCode ./unique-paths.ts/#code}
 *
 * @group 动态规划
 * @summary #### 62.不同路径 ✅
 *
 * 机器人从左上角走到右下角，只能向下或者向右走。如果机器人来到(i,j)，那么机器人只能从(i-1,j)向下走一步达到(i,j)，或者从(i, j-1)向右走一步达到(i,j)。
 *
 */
export const unique_paths = uniquePaths;
