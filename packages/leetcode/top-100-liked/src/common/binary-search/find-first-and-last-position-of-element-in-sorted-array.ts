/*
 * @lc app=leetcode id=34 lang=typescript
 *
 * [34] Find First and Last Position of Element in Sorted Array
 */

// @lc code=start

// #region code
function searchRange(nums: number[], target: number): number[] {
  // >= x
  const l = lowerBound(nums, target);
  // l === nums.length说明l左边全是小于target的数
  // nums[l] !== target说明有大于target的第一个数，但是这个数不是target
  // 综上两种情况都表明nums中没有target
  if (l === nums.length || nums[l] !== target) {
    return [-1, -1]; // nums 中没有 target
  }
  // 如果 l 存在，那么 r 必定存在
  // >x + 1 ===>  找>=(x+1) - 1 的位置
  const r = lowerBound(nums, target + 1) - 1;
  return [l, r];
};
// 找到>=target的第一个数的位置
function lowerBound(nums: number[], target: number): number {
  // [left, right) 左闭右开
  let l = 0;
  let r = nums.length - 1;

  // [1,2,2,3]找>=2
  // Math.floor(((-1 + 4) / 2)) = 1 , mid= 1, num = 2, 所以从mid开始往右都染蓝色。完事让right = mid
  // Math.floor((-1 + 1) / 2) = 0, mid = 0, num = 1，所以mid开始往左都染成红色。完事让left = mid + 1

  // 此时left = 1，right = 1，left 不小于right，停止
  // 返回left就是第一个大于2的数
  while (l <= r) {
    const m = Math.floor((l + r) / 2);

    if (nums[m] >= target) {
      // mid >= target
      // left --- target --- mid ---right
      r = m - 1;
    }
    else {
      // mid < target
      // left --- mid --- target --- right
      l = m + 1;
    }
  }

  return l;
}

// #endregion code
// @lc code=end

/**
 * {@include ../../../../../../.typedoc/problems/34.在排序数组中查找元素的第一个和最后一个位置.md}
 *
 * @description
 *
 * 在一个单调递增的数组中，查找元素的第一个位置和最后一个位置。
 * 其实就是两个任务：
 * - 找第一个`>=target`的数的位置
 * - 找第一个`>=(target+1)`的数的左边位置。但前提是要先找到第一个`>=target`的数的位置。
 *
 * {@includeCode ./find-first-and-last-position-of-element-in-sorted-array.ts/#code}
 *
 * 有序数组上的二分查找常见四种类型：
 *   - ">= x"
 *   - "> x"
 *   - "< x"
 *   - "<= x"
 *
 * 这四种类型可以互相转换（假设数组元素为整数）：
 *   - “找 > x 的第一个数”  ⇨ 等价于 “找 >= (x+1) 的第一个数”
 *   - “找 < x 的最后一个数” ⇨ 等价于 “找 >= x 的第一个数的左边一个数”
 *   - “找 <= x 的最后一个数” ⇨ 等价于 “找 > x 的第一个数的左边一个数”，也就是 “找 >= (x+1) 的第一个数的左边一个数”
 *
 *
 * 本题要找区间的开始和结束位置，即分别找 >= 和 <=。
 *
 * @group 二分查找
 * @summary #### 在排序数组中查找元素的第一个和最后一个位置 ✅
 *
 * 按题目意思其实就是找有序数组当中第一个>=target的数和第一个>=(target+1)的数。不过寻找>=(target+1)的数需要先找到>=target的数。否则中途应该停止继续查找。
 * 左闭右开，[l, r)，即r和r右边都是蓝色，l左边都是红色。
 * 二分不断确定nums[m]和target的大小关系进行染色。
 */
export const find_first_and_last_position_of_element_in_sorted_array = searchRange;
