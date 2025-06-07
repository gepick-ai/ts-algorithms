/*
 * @lc app=leetcode id=26 lang=typescript
 *
 * [26] Remove Duplicates from Sorted Array
 */

// @lc code=start
function removeDuplicates(nums: number[]): number {
  const set = new Set<number>();

  // 设计快慢指针fast、slow
  // slow一开始在0位置，fast一开始也在0位置。
  let slow = 0;
  let fast = 0;

  // 让快指针先往右跑，直到nums结尾
  while (fast < nums.length) {
    // 在快指针跑动前，每次检查fast
    const curNum = nums[fast];

    if (!set.has(curNum)) {
      set.add(curNum);
      nums[slow] = nums[fast];
      slow++;
    }

    fast++;
  }

  return slow;
};
// @lc code=end

/**
 * 原地操作数组，设计快慢指针，让快慢指针有条件的一前一后跑。
 */
export const remove_duplicates_from_sorted_array = removeDuplicates;
