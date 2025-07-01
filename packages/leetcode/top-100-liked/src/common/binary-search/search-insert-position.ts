/*
 * @lc app=leetcode id=35 lang=typescript
 *
 * [35] Search Insert Position
 */

// @lc code=start

// #region code
function searchInsert(nums: number[], target: number): number {
  // 按题目意思其实就是找有序数组当中第一个>=target的数
  return lowerBound(nums, target);
};

// 在nums中二分查找第一个>=target，找到返回下标
function lowerBound(nums: number[], target: number): number {
  // 左闭右开
  let l = 0;
  let r = nums.length;

  while (l < r) {
    const m = Math.floor((l + r) / 2);

    // left---target---mid---right
    if (nums[m] >= target) {
      r = m;
    }
    // left---mid---target---right
    else {
      l = m + 1;
    }
  }

  return r;
}
// #endregion code
// @lc code=end

/**
 * {@include ../../../../../../.typedoc/problems/35.搜索插入位置.md}
 *
 * @description
 *
 * {@includeCode ./search-insert-position.ts/#code}
 *
 * @group 二分查找
 * @summary #### 搜索插入位置 ✅
 * 
 * 按题目意思其实就是找有序数组当中第一个>=target的数。
 * 左闭右开，[l, r)，即r和r右边都是蓝色，l左边都是红色。
 * 二分不断确定nums[m]和target的大小关系进行染色。
 */
export const search_insert_position = searchInsert;
