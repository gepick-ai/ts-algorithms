/*
 * @lc app=leetcode id=240 lang=typescript
 *
 * [240] Search a 2D Matrix II
 */

// @lc code=start

// #region code
function searchMatrix(matrix: number[][], target: number): boolean {
  const m = matrix.length;
  const n = matrix[0].length;

  let t = 0;
  let r = n - 1;

  while (t < m && r >= 0) {
    if (matrix[t][r] > target) {
      r--;
    }
    else if (matrix[t][r] < target) {
      t++;
    }
    else {
      return true;
    }
  }

  return false;
};
// #endregion code

// @lc code=end

/**
 * {@include ../../../../../../.typedoc/leetcode/240.搜索二维矩阵II/problem.md}
 *
 * @description {@include ../../../../../../.typedoc/leetcode/240.搜索二维矩阵II/description.md}
 * {@includeCode ./search-a-2-d-matrix-ii.ts#code}
 *
 * @group 网格图
 * @summary {@include ../../../../../../.typedoc/leetcode/240.搜索二维矩阵II/summary.md}
 */
export const search_a_2_d_matrix_ii = searchMatrix;
