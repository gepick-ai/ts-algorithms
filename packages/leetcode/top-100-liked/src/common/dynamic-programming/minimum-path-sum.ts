/*
 * @lc app=leetcode id=64 lang=typescript
 *
 * [64] Minimum Path Sum
 */

// @lc code=start

// #region code

// 动态规划
function minPathSum(grid: number[][]): number {
  // dp[i][j]表示达到(i,j)的最小路径和

  // 状态转移方程：
  // (i,j)只能在(i-1,j)向下走，或者在(i, j-1)向右走。
  // 则dp[i][j] = Math.min(dp[i-1][j], dp[i][j-1]) + grid[i][j]

  // 状态初始化
  // 当处于(0,j)的时候，从(0,0)出发只能向右一个方向走到(0,j)，因此dp[0][j] = nums[0][0] + ... + nums[0][j];
  // 当处于(i,0)的时候，从(0,0)出发只能向下一个方向走到(i,0)，因此dp[i][0] = nums[0][0] + ... + nums[i][0];
  const m = grid.length;
  const n = grid[0].length;
  const dp: number[][] = Array.from({ length: m }, () => new Array(n).fill(0));

  let sum = 0;
  for (let i = 0; i < m; i++) {
    sum += grid[i][0];
    dp[i][0] = sum;
  }

  sum = 0;
  for (let j = 0; j < n; j++) {
    sum += grid[0][j];
    dp[0][j] = sum;
  }

  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1]) + grid[i][j];
    }
  }

  return dp[m - 1][n - 1];
};

// dfs
function minPathSum1(grid: number[][]): number {
  const rows = grid.length;
  const cols = grid[0].length;

  // 表示从i行j列出发获取到的最小路径总和
  function dfs(i: number, j: number): number {
    if (i > rows - 1 || j > cols - 1) {
      return 0;
    }

    let directions = [[1, 0], [0, 1]];
    let min = Infinity;

    for (let k = 0; k < directions.length; k++) {
      min = Math.min(min, grid[i][j] + dfs(i + directions[k][0], j + directions[k][1]));
    }

    return min;
  }

  const result = dfs(0, 0);

  return result;
};

// #endregion code

// @lc code=end

/**
 * {@include ../../../../../../.typedoc/problems/64.最小路径和.md}
 *
 * @answer
 * {@includeCode ./minimum-path-sum.ts/#code}
 *
 * @group 动态规划
 * @summary #### 64.最小路径和 ✅
 *
 * 解法类似62题“不同路径”。区别在于这道题要的是最小路径和，而62题要的是不同路径数。
 */
export const minimum_path_sum = minPathSum;
