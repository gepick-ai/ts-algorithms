/*
 * @lc app=leetcode id=283 lang=typescript
 *
 * [283] Move Zeroes
 */

// @lc code=start
/**
 Do not return anything, modify nums in-place instead.
 */
// #region code
function moveZeroes(nums: number[]): void {
  let left = -1;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      [nums[left + 1], nums[i]] = [nums[i], nums[left + 1]];
      left++;
    }
  }
};
// #endregion code

// @lc code=end

/**
 * @group 双指针
 * @document ../../../../../../.typedoc/docs/283.移动零.md
 *
 * @category 双指针
 * @summary 将left左边区域看作是非0的区域。遍历过程中不断扩大left区域，非0就扩大区域，是0就跳过，直到数组遍历完成。
 *
 * @description
 * - 将left左边区域看作全是非0的区域，一开始left在整个数组的最左边。
 * - 我们遍历数组，如果当前元素不为0，则将当前元素和left+1位置的元素交换，然后left++。如果当前元素为0，则跳过
 * - 遍历结束后，left左边的区域全是非0的元素。
 *
 * {@includeCode ./move-zeroes.ts/#code}
 */
export const move_zeroes = moveZeroes;
