/*
 * @lc app=leetcode id=34 lang=typescript
 *
 * [34] Find First and Last Position of Element in Sorted Array
 */

// @lc code=start
function searchRange(nums: number[], target: number): number[] {
  // >= x
  const start = lowerBound(nums, target);
  if (start === nums.length || nums[start] !== target) {
    return [-1, -1]; // nums 中没有 target
  }
  // 如果 start 存在，那么 end 必定存在
  // >x + 1 ===>  找>=(x+1) - 1 的第一个位置
  const end = lowerBound(nums, target + 1) - 1;
  return [start, end];
};
// 找到>=target的第一个数的位置
function lowerBound(nums: number[], target: number): number {
  // [left, right) 左闭右开
  let left = 0;
  let right = nums.length;

  // [1,2,2,3]找>=2
  // Math.floor(((-1 + 4) / 2)) = 1 , mid= 1, num = 2, 所以从mid开始往右都染蓝色。完事让right = mid
  // Math.floor((-1 + 1) / 2) = 0, mid = 0, num = 1，所以mid开始往左都染成红色。完事让left = mid + 1

  // 此时left = 1，right = 1，left 不小于right，停止
  // 返回left就是第一个大于2的数
  while (left < right) {
    const mid = Math.floor((left + right) / 2);

    if (nums[mid] >= target) {
      // mid >= target
      // left --- target --- mid ---right
      right = mid;
    }
    else {
      // mid < target
      // left --- mid --- target --- right
      left = mid + 1;
    }
  }

  return left;
}

// 在有序数组上的二分查找分成四种类型：
// >=x 、>x、<x、<=x
// 对于数组中都是整数，这四种类型可以互相转换：
// “找>x的第一个数”  可以转换成 求  “[找>=(x+1)的第一个数]”
// “找<x的最后一个数” 可以转换成 求  “[找>=x的第一个数]的左边位置的数”
// “找<=x的最后一个数” 可以转换成  求 “[找>x的第一个数]的左边位置的数”，也就是 “[找>=(x+1)的第一个数]的左边位置的数”

// 找开始位置就找>=,>
// 找结束位置就找<=,<

// 本题要找开始和结束，就是找>=和<=
// @lc code=end

/**
 * {@include ../../../../../../.typedoc/problems/34.在排序数组中查找元素的第一个和最后一个位置.md}
 *
 * @group 二分查找
 */
export const find_first_and_last_position_of_element_in_sorted_array = searchRange;
