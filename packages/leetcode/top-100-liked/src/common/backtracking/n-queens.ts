/*
 * @lc app=leetcode id=51 lang=typescript
 *
 * [51] N-Queens
 */

// @lc code=start
function solveNQueens(n: number): string[][] {
  const ans: string[][] = [];
  const queens = new Array(n).fill(0);
  const col = new Array(n).fill(false);
  const diag1 = new Array(2 * n - 1).fill(false);
  const diag2 = new Array(2 * n - 1).fill(false);

  function dfs(r: number) {
    if (r === n) {
      ans.push(queens.map(c => `${'.'.repeat(c)}Q${'.'.repeat(n - 1 - c)}`));
      return;
    }

    // 在 (r,c) 放皇后
    for (let c = 0; c < n; c++) {
      const rc = r - c + n - 1;
      if (!col[c] && !diag1[r + c] && !diag2[rc]) {
        queens[r] = c; // 直接覆盖，无需恢复现场
        col[c] = diag1[r + c] = diag2[rc] = true;
        dfs(r + 1);
        col[c] = diag1[r + c] = diag2[rc] = false;
      }
    }
  };

  dfs(0);

  return ans;
}
// @lc code=end

/**
 * @group 回溯算法
 * @category 回溯算法
 */
export const n_queens = solveNQueens;
