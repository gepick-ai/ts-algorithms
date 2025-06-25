/*
 * @lc app=leetcode id=48 lang=typescript
 *
 * [48] Rotate Image
 */

// @lc code=start
/**
 Do not return anything, modify matrix in-place instead.
 */
function rotate(matrix: number[][]): void {
  // 规律是从left bottom -> left top -> right top -> right bottom依次替换这些位置的数。比如
  // [
  //   [1,2,3],
  //   [4,5,6],
  //   [7,8,9]
  // ]

  // 旋转后的结果是：
  // [
  //    [7,4,1],
  //    [8,5,2],
  //    [9,6,3]
  // ]

  // 规律是：
  // 7来到1，1来到3，3来到9，9来到7
  // 4来到2，2来到6，6来到8，8来到4
  // 进入内层，只有1个5

  // 再比如
  // [
  //     [05,01,09,11],
  //     [02,04,08,10],
  //     [13,03,06,07],
  //     [15,14,12,16]
  // ]

  // 旋转后结果是：
  // [
  //     [15,13,02,05],
  //     [14,03,04,01],
  //     [12,06,08,09],
  //     [16,07,10,11]
  // ]

  // 规律是：
  // 第一轮
  // 15来到05，05来到11，11来到16，16来到15
  // 13来到01，01来到10，10来到12，12来到13
  // 02来到09，09来到07，07来到14，14来到02

  // 第二轮
  // 3来到4，4来到8，8来到6，6来到3

  // 终止

  // 根据规律观察，数的替换会从外层朝内层走动，所以应该也会需要top、right、bottom、left指针用来围圈

  // 同时发现，替换的开始是从(bottom, left)这个位置发起的，我们以这个位置开始作为替换起点，看下具体规律：

  // 第1轮-第1次
  // 坐标在(bottom + 0, left)的元素来到坐标在(top, left + 0)的元素位置，
  // 坐标在(top, left)的元素来到坐标在(top, right)的元素位置，
  // 坐标在(top + 0, right)的元素来到坐标在(bottom, right)的元素位置。

  // 第1轮-第2次
  // 坐标在(bottom + 1, left)的元素来到坐标在(top, left + 1)的元素位置
  // 坐标在(top, left + 1)的元素来到坐标在(top + 1, right)的位置
  // 坐标在(top + 1, right)的元素来到(bottom, right - 1)的位置

  // 第1轮-第3次
  // 坐标在(bottom + 2, left)的元素来到坐标在(top, left + 2)的元素位置
  // 坐标在(top, left + 2)的元素来到坐标在(top + 2, right)的位置
  // 坐标在(top + 2, right)的元素来到(bottom, right - 2)的位置

  // 第1轮停止
  // bottom + 3 === top 停止第一轮搜索
  // 此时top++, bottom--,left++, right--

  // 第2轮开始，重复第1轮所有操作。

  // 要进行多少轮？答案是只要bottom > top && left < right就继续，否则停止。

  const rows = matrix.length;
  const cols = matrix[0].length;

  let top = 0;
  let bottom = rows - 1;
  let left = 0;
  let right = cols - 1;

  while (top < bottom && left < right) {
    for (let i = 0; i < right - left; i++) {
      let temp = matrix[bottom - i][left];
      matrix[bottom - i][left] = matrix[bottom][right - i];
      matrix[bottom][right - i] = matrix[top + i][right];
      matrix[top + i][right] = matrix[top][left + i];
      matrix[top][left + i] = temp;
    }

    top++;
    bottom--;
    left++;
    right--;
  }
};

// @lc code=end

/**
 * @group 网格图
 * @category 矩阵
 */
export const rotate_image = rotate;
