/*
 * @lc app=leetcode id=283 lang=typescript
 *
 * [283] Move Zeroes
 */

// @lc code=start
/**
 * Do not return anything, modify nums in-place instead.
 */
// #region code
function moveZeroes(nums: number[]): void {
  let l = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      [nums[l], nums[i]] = [nums[i], nums[l]];
      l++;
    }
  }
};
// #endregion code

// @lc code=end

/**
 * {@include ../../../../../../.typedoc/leetcode/283.移动零/problem.md}
 *
 * @description
 * - 将left左边区域看作全是非0的区域，一开始left在整个数组的最左边。
 * - 我们遍历数组，如果当前元素不为0，则将当前元素和left位置的元素交换，然后left++。如果当前元素为0，则跳过
 * - 遍历结束后，left左边的区域全是非0的元素。
 * {@includeCode ./move-zeroes.ts/#code}
 *
 * @group 双指针
 * @summary {@include ../../../../../../.typedoc/leetcode/283.移动零/summary.md}
 */
export const move_zeroes = moveZeroes;
