/*
 * @lc app=leetcode id=6 lang=typescript
 *
 * [6] Zigzag Conversion
 */

// @lc code=start
function convert(s: string, numRows: number): string {
  if (numRows === 1) {
    return s;
  }

  let rows = numRows;
  let matrix = Array.from({ length: rows }, () => new Array(s.length).fill(''));
  let p = 0;
  let curRow = 0;
  let curCol = 0;

  // 循环合理的范围应是p< s.length;
  // 即拿完字符串的字符为止
  while (p < s.length) {
    // 从上到下放
    while (curRow < rows - 1) {
      matrix[curRow][curCol] = s[p];
      p++;
      curRow++;
    }

    // 从左往右斜着放
    let colEnd = curCol + rows - 1;
    while (curCol < colEnd) {
      //  当row = rows-1，col = 0;
      // 当row = rows-2，col = 1;
      // 当row = rows-3，col = 2;
      // 当row = rows-4，col = 3;
      matrix[curRow][curCol] = s[p];
      p++;
      curCol++;
      curRow--;
    }
  }

  let ans = '';

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < s.length; j++) {
      const char = matrix[i][j];
      if (char && char !== ' ') {
        ans += char;
      }
    }
  }

  return ans;
};
// @lc code=end

/**
 * 先找规律，再用一个矩阵装所有字符，将字符按照题意放到指定位置。然后组合答案。
 */
export const zigzag_conversion = convert;
