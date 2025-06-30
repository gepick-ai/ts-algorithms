/*
 * @lc app=leetcode id=287 lang=typescript
 *
 * [287] Find the Duplicate Number
 */

// @lc code=start
function findDuplicate(nums: number[]): number {
  // 抽屉原理：n个抽屉，n+1个物品，至少有一个抽屉放了2个物品
  // 在这个问题中：
  // - 抽屉：1到n的每个数字
  // - 物品：数组中的n+1个数字

  let left = 1;
  let right = nums.length - 1;

  while (left < right) {
    const mid = left + Math.floor((right - left) / 2);

    // 统计前mid个抽屉里放了多少个物品
    let count = 0;
    for (const num of nums) {
      // 找数组中小于等于mid的数字
      if (num <= mid) {
        count++;
      }
    }

    // 如果前mid个抽屉里放的物品数 > mid
    // 说明重复的物品一定在这mid个抽屉里
    // 否则重复的物品一定在后面的抽屉里
    if (count > mid) {
      right = mid;
    }
    else {
      left = mid + 1;
    }
  }

  return left;
}

// @lc code=end

/**
 * {@include ../../../../../../.typedoc/problems/287.寻找重复数.md}
 *
 * @group 二分查找
 */
export const find_the_duplicate_number = findDuplicate;
