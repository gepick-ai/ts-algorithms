/*
 * @lc app=leetcode id=994 lang=typescript
 *
 * [994] Rotting Oranges
 */

// @lc code=start
function orangesRotting(grid: number[][]): number {
  const m = grid.length;
  const n = grid[0].length;
  const queue: number[][] = [];
  let fresh = 0;

  // 遍历网格，确认新鲜的橘子数，以及即将进行bfs的橘子坐标加入队列
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (grid[i][j] === 1) {
        fresh++;
      }
      if (grid[i][j] === 2) {
        queue.push([i, j]);
      }
    }
  }

  let ans = 0;
  // 进行bfs
  while (fresh && queue.length > 0) {
    const size = queue.length;
    ans++;

    for (let i = 0; i < size; i++) {
      const node = queue.shift()!;
      const dirs = [[-1, 0], [1, 0], [0, -1], [0, 1]];

      dirs.forEach((d) => {
        const row = node[0] + d[0];
        const col = node[1] + d[1];

        // 找到新鲜橘子，那就加入队列，并且标记为腐烂
        if (row >= 0 && row < m && col >= 0 && col < n && grid[row][col] === 1) {
          queue.push([row, col]);
          grid[row][col] = 2;
          fresh--;
        }
      });
    }
  }

  return fresh > 0 ? -1 : ans;
};
// @lc code=end

/**
 * @group 网格图
 * @document ../../../../../../.typedoc/problems/994.腐烂的橘子.md
 *
 * @category 图-bfs
 */

export const rotting_oranges = orangesRotting;
