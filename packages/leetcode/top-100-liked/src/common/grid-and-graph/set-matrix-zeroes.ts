/*
 * @lc app=leetcode id=73 lang=typescript
 *
 * [73] Set Matrix Zeroes
 */

// @lc code=start

// #region code
/**
 * Do not return anything, modify matrix in-place instead.
 */

// 原地解法
function setZeroes(matrix: number[][]): void {
  const m = matrix.length;
  const n = matrix[0].length;

  function reset(i: number, j: number) {
    for (let k = 0; k < n; k++) {
      if (matrix[i][k] !== 0) {
        matrix[i][k] = Infinity;
      }
    }

    for (let k = 0; k < m; k++) {
      if (matrix[k][j] !== 0) {
        matrix[k][j] = Infinity;
      }
    }
  }

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (matrix[i][j] === 0) {
        reset(i, j);
      }
    }
  }

  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (matrix[i][j] === Infinity) {
        matrix[i][j] = 0;
      }
    }
  }
};

// 辅助空间解法
function setZeroes1(matrix: number[][]): void {
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

// #endregion code

// @lc code=end

/**
 * {@include ../../../../../../.typedoc/leetcode/73.矩阵置零/problem.md}
 *
 * @description {@include ../../../../../../.typedoc/leetcode/73.矩阵置零/description.md}
 * {@includeCode ./set-matrix-zeroes.ts#code}
 *
 * @group 网格图
 * @summary {@include ../../../../../../.typedoc/leetcode/73.矩阵置零/summary.md}
 */
export const set_matrix_zeroes = setZeroes;
