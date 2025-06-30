/*
 * @lc app=leetcode id=31 lang=typescript
 *
 * [31] Next Permutation
 */

// @lc code=start
/**
 Do not return anything, modify nums in-place instead.
 */
function nextPermutation(nums: number[]): void {
  // 从右往左，找第一个升序对
  let i = nums.length - 2;
  // 如果i持续大于等于右边的数，i往左跑，直到第一个i比它右边的数小，找到第一个升序对
  while (i >= 0 && nums[i] >= nums[i + 1]) {
    i--;
  }

  if (i >= 0) {
    // 从右往左，找第一个比i大的数
    let j = nums.length - 1;
    // 如果j持续小于等于i位的数，j往左跑，直到第一个j比i位的数小，就找到第一个比nums[i]大的nums[j]
    while (j >= 0 && nums[j] <= nums[i]) {
      j--;
    }

    // 交换i和j
    [nums[i], nums[j]] = [nums[j], nums[i]];
  }

  // 形成比上一个排列更大的排列后，让i右边位置的所有数最小排列
  let left = i + 1;
  let right = nums.length - 1;

  // 能这么做的关键是：i右边剩余数字一定是降序的，所以一一左右交换能得到升序
  while (left < right) {
    [nums[left], nums[right]] = [nums[right], nums[left]];
    left++;
    right--;
  }
};
// @lc code=end

/**
 * {@include ../../../../../../.typedoc/problems/31.下一个排列.md}
 *
 * @category 数学
 *
 * @group 其他
 */
export const next_permutation = nextPermutation;
