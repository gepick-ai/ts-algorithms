/*
 * @lc app=leetcode id=64 lang=typescript
 *
 * [64] Minimum Path Sum
 */

// @lc code=start
function minPathSum(grid: number[][]): number {
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
// @lc code=end

/**
 * @category 动态规划
 */
export const minimum_path_sum = minPathSum;
