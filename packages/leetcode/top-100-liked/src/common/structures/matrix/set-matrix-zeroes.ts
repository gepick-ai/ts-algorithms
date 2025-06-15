/*
 * @lc app=leetcode id=73 lang=typescript
 *
 * [73] Set Matrix Zeroes
 */

// @lc code=start
/**
 Do not return anything, modify matrix in-place instead.
 */
function setZeroes(matrix: number[][]): void {
  const rows = matrix.length;
  const cols = matrix[0].length;
  // 设置visited表示矩阵某个位置为0的访问情况，本身是0或者置0都加入visited
  const visited: boolean[][] = Array.from({ length: rows }, () => new Array(cols).fill(false));

  // reset表示将矩阵matrix中第row行col列的数字0所在的行和列所有数字置0
  function reset(matrix: number[][], row: number, col: number): void {
    // 定row，往左右跑
    // 定col，往上下跑
    visited[row][col] = true;

    for (let i = 0; i < cols; i++) {
      if (!visited[row][i] && matrix[row][i] !== 0) {
        visited[row][i] = true;
        matrix[row][i] = 0;
      }
    }

    for (let i = 0; i < rows; i++) {
      if (!visited[i][col] && matrix[i][col] !== 0) {
        visited[i][col] = true;
        matrix[i][col] = 0;
      }
    }
  }

  // 尝试每一个格子
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (!visited[i][j] && matrix[i][j] === 0) {
        reset(matrix, i, j);
      }
    }
  }
};
// @lc code=end

export const set_matrix_zeroes = setZeroes;
