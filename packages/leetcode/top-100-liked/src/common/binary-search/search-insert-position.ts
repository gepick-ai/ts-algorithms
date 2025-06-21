/*
 * @lc app=leetcode id=35 lang=typescript
 *
 * [35] Search Insert Position
 */

// @lc code=start
function searchInsert(nums: number[], target: number): number {
  // 按题目意思其实就是找有序数组当中第一个>=target的数
  return lowerBound(nums, target);
};

// 在nums中二分查找第一个>=target，找到返回下标
function lowerBound(nums: number[], target: number): number {
  // 左闭右开
  let left = 0;
  let right = nums.length;
  while (left < right) {
    const mid = Math.floor((left + right) / 2);

    // left---target---mid---right
    if (nums[mid] > target) {
      right = mid;
    }
    // left---mid---target---right
    else if (nums[mid] < target) {
      left = mid + 1;
    }
    else {
      return mid;
    }
  }

  return left;
}
// @lc code=end

/**
 * @category 二分算法
 */
export const search_insert_position = searchInsert;
