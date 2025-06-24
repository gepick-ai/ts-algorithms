/*
 * @lc app=leetcode id=200 lang=typescript
 *
 * [200] Number of Islands
 */

// @lc code=start
function numIslands(grid: string[][]): number {
  const rows = grid.length;
  const cols = grid[0].length;
  let count = 0;

  // 从第i行第j列开始插旗子，直到没地方可以插旗为止
  // 插旗的意思是：将'1'变成'2'
  function dfs(i: number, j: number) {
    if (i < 0 || i > rows - 1 || j < 0 || j > cols - 1) {
      return;
    }

    // 同时包含'0'和'2'，碰到水停止，碰到插过旗的地方也停止。
    if (grid[i][j] !== '1') {
      return;
    }

    grid[i][j] = '2';

    let directions = [[1, 0], [-1, 0], [0, -1], [0, 1]];

    for (let k = 0; k < directions.length; k++) {
      dfs(i + directions[k][0], j + directions[k][1]);
    }
  }

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (grid[i][j] === '1') {
        // 从第i行第j列开始插旗
        dfs(i, j);
        count++;
      }
    }
  }

  return count;
};
// @lc code=end

/**
 * @category 网格图
 * @summary 四个方向dfs插旗
 */
export const number_of_islands = numIslands;
