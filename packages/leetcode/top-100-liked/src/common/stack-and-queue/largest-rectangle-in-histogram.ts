/*
 * @lc app=leetcode id=84 lang=typescript
 *
 * [84] Largest Rectangle in Histogram
 */

// @lc code=start

// #region code

// 单调栈解法
function largestRectangleArea(hs: number[]): number {
  const n = hs.length;
  let st: number[] = [];
  const lMin: number[] = new Array(n).fill(-1);
  const rMin: number[] = new Array(n).fill(n);

  // 找每个数右边第一个比它小的位置
  for (let i = 0; i < n; i++) {
    while (st.length && hs[st[st.length - 1]] > hs[i]) {
      const j = st.pop()!;
      rMin[j] = i;
    }

    st.push(i);
  }

  st.length = 0;
  for (let i = n - 1; i >= 0; i--) {
    while (st.length && hs[st[st.length - 1]] > hs[i]) {
      const j = st.pop()!;
      lMin[j] = i;
    }

    st.push(i);
  }

  // 至此我们找到了所有柱子左边第一个比它小的位置，右边第一个比它大的位置。
  // 我们开始计算面积
  // 相对于暴力，我们相当于预处理了当前柱子的左右边界
  let ans = hs[0];
  for (let i = 0; i < n; i++) {
    let l = lMin[i];
    let r = rMin[i];

    ans = Math.max(((r - 1) - (l + 1) + 1) * hs[i], ans);
  }

  return ans;
};

// 暴力解法（超时）
function largestRectangleArea2(hs: number[]): number {
  const n = hs.length;
  let ans = hs[0];
  // 枚举当前高度，假设当前高度是构成一个矩形的高度，不断向左右扩展寻找宽度
  for (let i = 0; i < n; i++) {
    let l = i - 1;
    let r = i + 1;

    // 如果每次观察到l所在位置的高度>=枚举到的高度，那么l往左跑一步
    while (l >= 0 && hs[l] >= hs[i]) {
      l--;
    }

    // 如果每次观察到r所在位置的高度>=枚举到的高度，那么r往右跑一步
    while (r < n && hs[r] >= hs[i]) {
      r++;
    }

    // 当l和r都跑到不符合条件后，则width = (r-1) - (l+1) + 1
    ans = Math.max(((r - 1) - (l + 1) + 1) * hs[i], ans);
  }

  return ans;
};
// #endregion code

// @lc code=end

/**
 * {@include ../../../../../../.typedoc/leetcode/84.柱状图中最大的矩形/problem.md}
 *
 * @description
 * {@include ../../../../../../.typedoc/leetcode/84.柱状图中最大的矩形/description.md}
 * {@includeCode ./largest-rectangle-in-histogram.ts#code}
 *
 * @group 栈和队列
 * @summary
 * {@include ../../../../../../.typedoc/leetcode/84.柱状图中最大的矩形/summary.md}
 */
export const largest_rectangle_in_histogram = largestRectangleArea;
