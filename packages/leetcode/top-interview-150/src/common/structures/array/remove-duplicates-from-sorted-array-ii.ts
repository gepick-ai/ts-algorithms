/*
 * @lc app=leetcode id=80 lang=typescript
 *
 * [80] Remove Duplicates from Sorted Array II
 */

// @lc code=start
function removeDuplicates(nums: number[]): number {
  // 允许元素出现两次，就需要使用结构记忆元素次数。这里首先用map记录存放元素及其出现个数
  const map = new Map<number, number>();

  // 目前我们将元素及其出现次数记录到了字典里头。接下来同样设计快慢指针，fast，slow。都在0位置开始。
  let slow = 0;
  let fast = 0;

  // 同样让fast往数组右边跑
  while (fast < nums.length) {
    // fast跑动之前，我们检查fast位置的元素在map中的记录情况，判断是否<=2:
    // 如果<2，那么我们将其发送到slow位置，slow++
    // 如果>=2，fast直接往右跑

    const curNum = nums[fast];
    const count = map.get(curNum) ?? 0;

    if (count < 2) {
      map.set(curNum, count + 1);
      nums[slow] = curNum;
      slow++;
    }

    fast++;
  }

  return slow;
};
// @lc code=end

/**
 * 原地操作数组想快慢指针，如果允许元素出现两次，那么需要使用结构记忆元素次数。跟26题类似，不同的是一个用set，一个用map。
 */
export const remove_duplicates_from_sorted_array_ii = removeDuplicates;
