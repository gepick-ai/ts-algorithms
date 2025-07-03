/*
 * @lc app=leetcode id=74 lang=typescript
 *
 * [74] Search a 2D Matrix
 */

// @lc code=start
function searchMatrix(matrix: number[][], target: number): boolean {
  // 照题意第二个点，二维数组可以映射成一个一维有序数组
  // 整个一维数组的元素个数是matrix[0]*matrix[1]
  // 此时需要找到一维数组如何映射到矩阵的行列
  // a = [1,2,3,4,5,6]
  // b = [
  //     [1,2,3],
  //     [4,5,6]
  // ]
  // a[0] = b[0][0]
  // a[1] = b[0][1]
  // a[2] = b[0][2]
  // a[3] = b[1][0] = b[3/3][3%3] = b[一维数组的下标除以二维数组每一行放多少个][一维数组的下标对二维数组每一行放多少个取模]
  // a[4] = b[1][1] = b[4/3][4%3]
  // a[5] = b[1][2] = b[5/3][5%3]

  // 所以直接当作一维数组从长度为matrix[0]*matrix[1]，每次映射从矩阵拿一维数组的元素就好了

  const len = matrix.length * matrix[0].length;
  const cols = matrix[0].length;
  // 通过当前一维数组的遍历所到的下标获取二维矩阵中所指的位置找到对应num
  const nums = (i: number) => matrix[Math.floor(i / cols)][i % cols];
  let l = 0;
  let r = len;

  while (l < r) {
    const m = Math.floor((l + r) / 2);

    if (nums(m) >= target) {
      r = m;
    }
    else {
      l = m + 1;
    }
  }

  return r < len && nums(r) === target;
};

// @lc code=end

/**
 * {@include ../../../../../../.typedoc/leetcode/74.搜索二维矩阵/problem.md}
 *
 * @group 二分查找
 * @summary {@include ../../../../../../.typedoc/leetcode/74.搜索二维矩阵/summary.md}
 */
export const search_a_2_d_matrix = searchMatrix;
