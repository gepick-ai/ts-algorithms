/*
 * @lc app=leetcode id=33 lang=typescript
 *
 * [33] Search in Rotated Sorted Array
 */

// @lc code=start

// #region code

function search(nums: number[], target: number): number {
  const min = findMin(nums);

  if (target <= nums[nums.length - 1]) {
    return lowerBound(nums, min, nums.length, target);
  }

  return lowerBound(nums, 0, min, target);
};

function findMin(nums: number[]) {
  const n = nums.length;
  let l = 0;
  let r = n - 1;

  while (l < r) {
    const m = Math.floor((l + r) / 2);

    if (nums[m] < nums[n - 1]) {
      r = m;
    }
    else {
      l = m + 1;
    }
  }

  return r;
}

function lowerBound(nums: number[], l: number, r: number, target: number) {
  while (l < r) {
    const m = Math.floor((l + r) / 2);

    if (nums[m] >= target) {
      r = m;
    }
    else {
      l = m + 1;
    }
  }

  return nums[r] === target ? r : -1;
}

// #endregion code

// @lc code=end

/**
 * {@include ../../../../../../.typedoc/problems/33.搜索旋转排序数组.md}
 *
 * @description
 * 先在旋转数组中找到最小值，然后根据最小值将数组分为两部分，然后分别在两部分中进行二分查找。
 *
 * {@includeCode  ./search-in-rotated-sorted-array.ts/#code}
 *
 * @group 二分查找
 * @summary #### 搜索旋转排序数组 ✅
 *
 * 寻找旋转数组中的最小值 + 以最小值为分界点，将数组分为两部分，然后分别在两部分中进行二分查找。
 */
export const search_in_rotated_sorted_array = search;
