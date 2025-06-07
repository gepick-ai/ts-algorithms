/*
 * @lc app=leetcode id=88 lang=typescript
 *
 * [88] Merge Sorted Array
 */

// @lc code=start
/**
 Do not return anything, modify nums1 in-place instead.
 */
function merge(nums1: number[], m: number, nums2: number[], n: number): void {
  // 设计指针i1指向nums1的第一个位置，指针i2指向nums2的第一个位置。
  let i1 = 0;

  // 拿两个指针的位置的数进行比较：
  // 1.如果i1位置的数比i2位置的数小，i1直接往右走，i2别动；
  // 2.如果i1位置的数和i2位置的数相同，i1直接往右走，i2别动；
  // 3.如果i1位置的数比i2位置的数大：交换i2和i1位置的数。i1往右边走，i2重新排序
  while (i1 < m) {
    const curNum1 = nums1[i1];
    const curNum2 = nums2[0];

    if (curNum1 > curNum2) {
      const temp = nums1[i1];
      nums1[i1] = nums2[0];
      nums2[0] = temp;
      nums2.sort((a, b) => a - b);
    }

    i1++;
  }

  while (i1 < m + n) {
    for (let i = 0; i < n; i++) {
      nums1[i1] = nums2[i];
      i1++;
    }
  }
};
// @lc code=end
export const merge_sorted_array = merge;
