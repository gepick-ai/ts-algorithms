/*
 * @lc app=leetcode id=48 lang=typescript
 *
 * [48] Rotate Image
 */

// @lc code=start

// #region code
/**
 * Do not return anything, modify matrix in-place instead.
 */

function rotate(matrix: number[][]): void {
  const n = matrix.length;
  const m = matrix[0].length;

  let t = 0;
  let b = n - 1;
  let l = 0;
  let r = m - 1;

  while (t < b && l < r) {
    for (let i = 0; i < r - l; i++) {
      let temp = matrix[t][l + i];
      matrix[t][l + i] = matrix[b - i][l];
      matrix[b - i][l] = matrix[b][r - i];
      matrix[b][r - i] = matrix[t + i][r];
      matrix[t + i][r] = temp;
    }

    t++;
    b--;
    l++;
    r--;
  }
};
// #endregion code

// @lc code=end

/**
 * {@include ../../../../../../.typedoc/leetcode/48.旋转图像/problem.md}
 *
 * @description {@include ../../../../../../.typedoc/leetcode/48.旋转图像/description.md}
 * {@includeCode ./rotate-image.ts#code}
 *
 * @group 网格图
 * @summary {@include ../../../../../../.typedoc/leetcode/48.旋转图像/summary.md}
 */
export const rotate_image = rotate;
