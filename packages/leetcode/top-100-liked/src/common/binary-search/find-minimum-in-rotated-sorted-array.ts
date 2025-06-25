/*
 * @lc app=leetcode id=153 lang=typescript
 *
 * [153] Find Minimum in Rotated Sorted Array
 */

// @lc code=start
function findMin(nums: number[]): number {
  // 一个轮转的有序数组肯定能被分成左右两个有序的部分
  // 并且左边部分一定大于右边部分
  // 所以min一定在右边部分的开头

  // 二分查找，mid位置，判断这个位置和nums[right-1]的关系
  // 如果mid位置的数比nums[right-1]要大，说明mid落在了左边部分
  // 因此结果在[mid+1, right)这部分
  // 否则说明mid落在了右边部分，这个时候说明mid有可能是min，也可能大于min
  // 此时我们应该更新right，让right = mid在[left, mid)继续查找

  let left = 0;
  let right = nums.length;

  // 处理特殊情况：数组只有一个元素或未旋转
  if (nums.length === 1 || nums[0] < nums[right - 1]) {
    return nums[0];
  }

  while (left < right) {
    const mid = left + Math.floor((right - left) / 2);

    // 如果mid位置的数大于等于第一个数，说明在左边部分
    if (nums[mid] >= nums[0]) {
      left = mid + 1;
    }
    else {
      right = mid;
    }
  }

  return nums[left];
}

// @lc code=end

/**
 * @group 二分算法
 */
export const find_minimum_in_rotated_sorted_array = findMin;
