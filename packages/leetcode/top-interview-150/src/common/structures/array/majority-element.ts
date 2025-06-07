/*
 * @lc app=leetcode id=169 lang=typescript
 *
 * [169] Majority Element
 */

// @lc code=start
function majorityElement(nums: number[]): number {
  // 出现次数 大于 ⌊ n/2 ⌋
  const targetCount = Math.floor(nums.length / 2);
  const map = new Map<number, number>();

  for (const num of nums) {
    const count = map.get(num) ?? 0;

    if (count === targetCount) {
      return num;
    }

    map.set(num, count + 1);
  }

  return nums[0];
};
// @lc code=end

/**
 * 出现次数用map记录，然后遍历map，找到出现次数大于⌊ n/2 ⌋的元素。
 */
export const majority_element = majorityElement;
