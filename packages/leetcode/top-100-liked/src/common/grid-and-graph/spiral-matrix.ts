/*
 * @lc app=leetcode id=54 lang=typescript
 *
 * [54] Spiral Matrix
 */

// @lc code=start
function spiralOrder(matrix: number[][]): number[] {
  const rows = matrix.length;
  const cols = matrix[0].length;
  const result: number[] = [];

  // 设置四个指针top、bottom、left、right
  // 从右、下、左、上每朝一个方向跑完一次，对应指针跳动一次

  let top = 0;
  let bottom = rows - 1;
  let left = 0;
  let right = cols - 1;
  const visited: boolean[][] = Array.from({ length: rows }, () => new Array(cols).fill(false));

  while (top <= bottom && left <= right) {
    // 顺时针开始跑动

    // 朝右跑
    for (let i = left; i <= right; i++) {
      if (!visited[top][i]) {
        result.push(matrix[top][i]);
        visited[top][i] = true;
      }
    }

    top++;

    for (let i = top; i <= bottom; i++) {
      if (!visited[i][right]) {
        result.push(matrix[i][right]);
        visited[i][right] = true;
      }
    }

    right--;

    for (let i = right; i >= left; i--) {
      if (!visited[bottom][i]) {
        result.push(matrix[bottom][i]);
        visited[bottom][i] = true;
      }
    }

    bottom--;

    for (let i = bottom; i >= top; i--) {
      if (!visited[i][left]) {
        result.push(matrix[i][left]);
        visited[i][left] = true;
      }
    }

    left++;
  }

  return result;
};

// @lc code=end

/**
 * {@include ../../../../../../.typedoc/leetcode/54.螺旋矩阵/problem.md}
 *
 * @group 网格图
 */
export const spiral_matrix = spiralOrder;
