/*
 * @lc app=leetcode id=240 lang=typescript
 *
 * [240] Search a 2D Matrix II
 */

// @lc code=start
function searchMatrix(matrix: number[][], target: number): boolean {
  // 从右上角开始找，这样子每个数都比左边的大，比下面的小
  // 我们每次发现target和我们来到的数对比：
  // 1.相等返回true
  // 2.target比当前数要小：说明当前数所在列一定不可能了，因为这列最小的数都比target要大了，把这列消除掉
  // 3.target比当前数要大：说明当前数所在行一定不可能了，因为这行最大的数都比target要小了，把这行消除掉

  // 重复上述过程，消除行、消除列。
  // 由于查找过程是从上往下，从右往左的，所以列不断趋紧于第0列，行不断趋近于最后一行。因此循环不变的条件是row <= rows-1, col >=0

  const rows = matrix.length;
  const cols = matrix[0].length;

  let row = 0;
  let col = cols - 1;

  while (row < rows && col >= 0) {
    const num = matrix[row][col];

    if (num === target) {
      return true;
    }

    // 消除num所在的列，因为这一列全部大于target
    if (num > target) {
      col--;
    }

    // 消除num所在行，因为这一行全部小于taret
    if (num < target) {
      row++;
    }
  }

  return false;
};
// @lc code=end

/**
 * @group 网格图
 * @document ../../../../../../.typedoc/problems/240.搜索二维矩阵II.md
 *
 * @category 矩阵
 */
export const search_a_2_d_matrix_ii = searchMatrix;
