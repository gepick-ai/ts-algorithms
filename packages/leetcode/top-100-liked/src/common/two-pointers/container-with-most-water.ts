/*
 * @lc app=leetcode id=11 lang=typescript
 *
 * [11] Container With Most Water
 */

// @lc code=start
// #region code
function maxArea(height: number[]): number {
  let left = 0;
  let right = height.length - 1;
  let max = 0; // 面积= 长*宽

  while (left < right) {
    const area = (right - left) * Math.min(height[left], height[right]);
    max = Math.max(area, max);

    if (height[left] <= height[right]) {
      left++;
    }
    else {
      right--;
    }
  }

  return max;
};
// #endregion code
// @lc code=end

/**
 *
 * {@include ../../../../../../.typedoc/problems/11.盛最多水的容器.md}
 *
 * @description
 * - 分析两根柱子的情况：
 *   - 柱子A高 === 柱子B高
 *   - 柱子A高 > 柱子B高
 *   - 柱子A高 < 柱子B高
 *
 * - 容器面积 = 宽度 * 高度
 *   - 宽度：根据题目要求只有变小的趋势
 *   - 高度：由较矮的柱子决定
 *
 * - 移动策略分析：
 *   - 当A、B等高时：
 *     - 移动任意一根柱子，容器高度都会变小
 *
 *   - 当A、B不等高时：
 *     - 移动高柱子：
 *      可能变得比矮柱子还矮
 *      可能变得跟矮柱子一样高
 *      可能还是比矮柱子高
 *      结论：移动高柱子只会让容器高度变小
 *
 *     - 移动矮柱子：
 *      可能变得比当前还矮
 *      可能变得跟当前一样高
 *      可能变得跟高柱子一样高
 *      可能变得比高柱子还高
 *      结论：移动矮柱子有可能让容器高度变大
 *
 * - 最终策略：移动较矮的柱子，不断尝试当前能够围成的容器面积，更新最大面积值
 *
 * {@includeCode ./container-with-most-water.ts/#code}
 *
 * @group 双指针
 * @summary ✅ 分析柱子高低走法
 */
export const container_with_most_water = maxArea;
