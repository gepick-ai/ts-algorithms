/*
 * @lc app=leetcode id=4 lang=typescript
 *
 * [4] Median of Two Sorted Arrays
 */

// @lc code=start
function findMedianSortedArrays(a: number[], b: number[]): number {
  if (a.length > b.length) {
    [a, b] = [b, a]; // 保证下面的 i 可以从 0 开始枚举
  }

  const m = a.length; const n = b.length;
  a = [-Infinity, ...a, Infinity];
  b = [-Infinity, ...b, Infinity];

  // 枚举 nums1 有 i 个数在第一组
  // 那么 nums2 有 j = (m + n + 1) / 2 - i 个数在第一组
  let i = 0; let j = Math.floor((m + n + 1) / 2);
  while (true) {
    if (a[i] <= b[j + 1] && a[i + 1] > b[j]) { // 写 >= 也可以
      const max1 = Math.max(a[i], b[j]); // 第一组的最大值
      const min2 = Math.min(a[i + 1], b[j + 1]); // 第二组的最小值
      return (m + n) % 2 ? max1 : (max1 + min2) / 2;
    }
    i++; // 继续枚举
    j--;
  }
};

// @lc code=end

/**
 * {@include ../../../../../../.typedoc/leetcode/4.寻找两个正序数组的中位数/problem.md}
 *
 * @group 二分查找
 *
 * @hidden
 */
export const median_of_two_sorted_arrays = findMedianSortedArrays;
