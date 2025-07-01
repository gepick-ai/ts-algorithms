/*
 * @lc app=leetcode id=153 lang=typescript
 *
 * [153] Find Minimum in Rotated Sorted Array
 */

// @lc code=start

// #region code
function findMin(nums: number[]): number {
  let n = nums.length;
  let target = nums[n - 1];

  // 左闭右开，[l, r)，即从r开始往右都是蓝色，从l - 1开始往左都是红色
  // 我们把蓝色定义成 <=target，红色定义成 >target
  let l = 0;
  let r = n - 1; // 从n-1开始是因为第二段递增区间最后一个一定是蓝色，所以左闭右开[l,r)，搜索区间在[0,n-2]

  // 把<=target染成蓝色，>target染成红色
  while (l < r) {
    let m = Math.floor((l + r) / 2);

    // 说明[m, n-1]是递增的
    // 说明落在第二段递增区间，或者压根只有一段递增区间（此时相当于没有旋转）
    if (nums[m] <= target) {
      r = m;
    }
    // 说明[m, n-1]是非递增的，比如[4567123]，m此时是7，是峰顶。这种时候最小值一定在[m+1, n-1]之间
    else {
      l = m + 1;
    }
  }

  return nums[r];
}
// #endregion code

// @lc code=end

/**
 * {@include ../../../../../../.typedoc/problems/153.寻找旋转排序数组中的最小值.md}
 *
 * @description
 *
 * ### 关键点1：旋转数组的特性
 * 由于原数组是严格升序的，所以旋转 1 次和旋转多次的结果是类似的：最终数组要么是一个完整的升序数组（即未旋转时的原数组），要么是两个升序数组的组合。
 * 这两个升序数组的组合形式是：[较大的升序段 + 较小的升序段]，其中较小的升序段的第一个元素就是整个数组的最小值。
 *
 * ### 关键点2：本题二分查找的核心思路：区间内的都是还没有确定是否小于 nums[len-1] 的数的下标，既然 right=mid，说明 right 已经确定清楚了，自然就不能在区间内了
 * 使用二分查找，每次通过比较中值 nums[mid] 与 nums[right] 来判断中值 mid 属于哪个升序段：
 *    - 如果 nums[mid] < nums[right]：说明 mid 位于右升序段（即较小的升序段），mid 可能是最小值，因此将 right 更新为 mid。
 *    - 否则（nums[mid] > nums[right]）：说明 mid 位于左升序段（即较大的升序段），此时最小值一定在 mid 右侧，因此将 left 更新为 mid + 1
 *    - 当 left == right 时，说明找到了最小值，直接返回 nums[left] 即可。所以循环不变的条件是：while(left < right)而不是while(left <= right)。区间收缩到剩下一个元素时停止。
 *
 * ### 关键点3：为什么不用 mid 和最左边的值比较？
 * 因为这是一个旋转之后的递增序列：
 * - 用 mid 和 left 比较时：mid > left，无法确定最小值在 mid 的左边还是右边。
 * - 用 mid 和 right 比较时：
 *   - 如果 mid > right，说明最小值在 mid 的右边（不包含 mid，因为 right 比 mid 小）。
 *   - 如果 mid <= right，说明右边是有序的（或者干脆只有一段递增区间，旋转回来了），且最小值就是 mid 或在 mid 的左边（包含 mid）。
 *
 * @group 二分查找
 * @summary #### 寻找旋转排序数组中的最小值 ✅
 *
 * 跟数组中最后一个数比较。将蓝色定义成>=nums[n-1]的数，将红色定义成<nums[n-1]的数。
 * 左闭右开，[l, r)，即r和r右边都是蓝色，l左边都是红色。
 * 从n-1开始是因为第二段递增区间最后一个一定是蓝色，所以左闭右开[l,r)，搜索区间在[0,n-2]。二分不断确定nums[m]和nums[n-1]的大小关系进行染色。
 */
export const find_minimum_in_rotated_sorted_array = findMin;
