/*
 * @lc app=leetcode id=54 lang=typescript
 *
 * [54] Spiral Matrix
 */

// @lc code=start

// #region code

// 标记解法
function spiralOrder(matrix: number[][]): number[] {
  const ans: number[] = [];
  const m = matrix.length;
  const n = matrix[0].length;
  const visit = (i: number, j: number) => {
    if (matrix[i][j] !== Infinity) {
      ans.push(matrix[i][j]);
      matrix[i][j] = Infinity;
    }
  };

  let t = 0;
  let b = m - 1;
  let l = 0;
  let r = n - 1;

  while (t <= b && l <= r) {
    for (let i = l; i <= r; i++) {
      visit(t, i);
    }
    t++;

    for (let i = t; i <= b; i++) {
      visit(i, r);
    }
    r--;

    for (let i = r; i >= l; i--) {
      visit(b, i);
    }
    b--;

    for (let i = b; i >= t; i--) {
      visit(i, l);
    }
    l++;
  }

  return ans;
};

// 不标记解法
function spiralOrder1(matrix: number[][]): number[] {
  const ans: number[] = [];
  const m = matrix.length;
  const n = matrix[0].length;

  let t = 0;
  let b = m - 1;
  let l = 0;
  let r = n - 1;

  while (t <= b && l <= r) {
    for (let i = l; i <= r; i++) {
      ans.push(matrix[t][i]);
    }
    t++;
    for (let i = t; i <= b; i++) {
      ans.push(matrix[i][r]);
    }
    r--;
    for (let i = r; i >= l; i--) {
      ans.push(matrix[b][i]);
    }
    b--;
    for (let i = b; i >= t; i--) {
      ans.push(matrix[i][l]);
    }
    l++;
  }

  return ans;
};
// #endregion code

// @lc code=end

/**
 * {@include ../../../../../../.typedoc/leetcode/54.螺旋矩阵/problem.md}
 *
 * @description {@include ../../../../../../.typedoc/leetcode/54.螺旋矩阵/description.md}
 * {@includeCode ./spiral-matrix.ts#code}
 *
 * @group 网格图
 * @summary {@include ../../../../../../.typedoc/leetcode/54.螺旋矩阵/summary.md}
 */
export const spiral_matrix = spiralOrder;
