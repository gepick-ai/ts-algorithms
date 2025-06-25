/*
 * @lc app=leetcode id=283 lang=typescript
 *
 * [283] Move Zeroes
 */

// @lc code=start
/**
 Do not return anything, modify nums in-place instead.
 */
function moveZeroes(nums: number[]): void {
  let bound = -1;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      continue;
    }

    swap(nums, bound + 1, i);
    bound++;
  }
};

function swap(nums: number[], i: number, j: number) {
  const temp = nums[i];
  nums[i] = nums[j];
  nums[j] = temp;
}
// @lc code=end

/**
 * @group 双指针
 * @category 双指针
 *
 */
export const move_zeroes = moveZeroes;
