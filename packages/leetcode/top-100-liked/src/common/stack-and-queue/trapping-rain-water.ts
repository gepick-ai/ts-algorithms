/*
 * @lc app=leetcode id=42 lang=typescript
 *
 * [42] Trapping Rain Water
 */

// @lc code=start

// #region code
function trap(hs: number[]): number {
  const n = hs.length;
  let ans = 0;
  const st: number[] = [0]; // 维护递减单调栈，存储索引

  for (let i = 1; i < n; i++) {
    // 当遇到比栈顶高的柱子时，可以计算接水量
    while (st.length > 0 && hs[i] > hs[st[st.length - 1]]) {
      const top = st.pop()!;

      // 如果栈为空，说明左边没有更高的柱子，无法接水
      if (st.length === 0) {
        break;
      }

      // 计算接水量：宽度 * 高度
      const l = st[st.length - 1]; // 左边第一个比top高的柱子
      const w = i - l - 1; // 宽度
      const h = Math.min(hs[i], hs[l]) - hs[top]; // 高度

      ans += w * h;
    }

    st.push(i);
  }

  return ans;
}
// #endregion code

// @lc code=end

/**
 * {@include ../../../../../../.typedoc/leetcode/42.接雨水/problem.md}
 *
 * @description
 * {@include ../../../../../../.typedoc/leetcode/42.接雨水/description.md}
 * {@includeCode ./trapping-rain-water.ts#code}
 *
 * @group 栈和队列
 * @summary {@include ../../../../../../.typedoc/leetcode/42.接雨水/summary.md}
 */
export const trapping_rain_water = trap;
