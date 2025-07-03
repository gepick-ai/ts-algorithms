/*
 * @lc app=leetcode id=11 lang=typescript
 *
 * [11] Container With Most Water
 */

// @lc code=start
// #region code
function maxArea(height: number[]): number {
  let l = 0;
  let r = height.length - 1;
  let max = 0; // 面积= 长*宽

  while (l < r) {
    const area = (r - l) * Math.min(height[l], height[r]);
    max = Math.max(area, max);

    if (height[l] <= height[r]) {
      l++;
    }
    else {
      r--;
    }
  }

  return max;
};
// #endregion code
// @lc code=end

/**
 * {@include ../../../../../../.typedoc/leetcode/11.盛最多水的容器/problem.md}
 *
 * @description
 * {@include ../../../../../../.typedoc/notes/11.盛最多水的容器.md}
 * {@includeCode ./container-with-most-water.ts/#code}
 *
 * @group 双指针
 * @summary {@include ../../../../../../.typedoc/leetcode/11.盛最多水的容器/summary.md}
 */
export const container_with_most_water = maxArea;
