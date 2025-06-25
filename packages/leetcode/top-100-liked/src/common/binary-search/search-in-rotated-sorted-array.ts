/*
 * @lc app=leetcode id=33 lang=typescript
 *
 * [33] Search in Rotated Sorted Array
 */

// @lc code=start
function search(nums: number[], target: number): number {
  // 结论：一个有序数组被轮转后，一样可以用二分查找
  // 关键点1：旋转后的有序数组一定可以被划分成两个有序部分，只不过你不知道切分点在哪个位置而已。

  // 关键点2：使用二分查找时，通过判断left和mid位置的数的大小关系，来判断哪个部分一定是有序的部分。
  //        1. 如果nums[mid] >= nums[left]，左半部分有序，否则就是右半部分有序。
  // 使用 >= 而不是 > 的原因是：处理 mid = left 的特殊情况确保当左半部分只有一个元素时，也能正确判断它是有序的，一个元素自然就是有序的。
  //        2. 如果nums[mid] < nums[left]，说明右半部分是有序的。

  /**
     * 思路
     * 1. 通过mid分割，找出左右两个子数组那部分是有序的，那部分是部分有序的
     * 2. 判断mid位置的数和target数的大小，来确定接下来去哪个部分的子数组继续寻找
     */

  let left = 0;
  let right = nums.length;

  while (left < right) {
    const mid = Math.floor((left + right) / 2);

    if (nums[mid] === target) {
      return mid;
    }

    // 分类讨论：左半部分有序还是右半部分有序
    // 用nums[mid] >= nums[left]来判断左半部分有序还是右半部分有序，而不是用nums[mid] > nums[left]，因为当mid = left时，nums[mid] = nums[left]，此时左半部分有序
    if (nums[mid] >= nums[left]) { // 说明左半部分有序
      // 继续判断target是否在[left, mid - 1]范围内
      if (nums[left] <= target && target <= nums[mid - 1]) {
        right = mid;
      }
      else {
        left = mid + 1;
      }
    }
    else { // 说明右半部分有序
      // 继续判断target是否在[mid+1, right-1]范围内
      if (nums[mid + 1] <= target && target <= nums[right - 1]) {
        left = mid + 1;
      }
      else {
        right = mid;
      }
    }
  }

  return -1;
};

// @lc code=end

/**
 * @group 二分算法
 */
export const search_in_rotated_sorted_array = search;
