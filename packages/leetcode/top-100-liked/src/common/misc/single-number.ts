/*
 * @lc app=leetcode id=136 lang=typescript
 *
 * [136] Single Number
 */

// @lc code=start
function singleNumber(nums: number[]): number {
  // 对于这道题，可使用异或运算 ⊕。异或运算有以下三个性质。
  // 任何数和 0 做异或运算，结果仍然是原来的数，即 a⊕0=a。
  // 任何数和其自身做异或运算，结果是 0，即 a⊕a=0。
  // 异或运算满足交换律和结合律，即 a⊕b⊕a=b⊕a⊕a=b⊕(a⊕a)=b⊕0=b。

  // 题目说了只有1个数是出现一次的数，剩下的数出现两次
  // 利用异或运算 ⊕，可以认为所有数可以写成一个公式：a⊕ab⊕b⊕c = (a⊕a)(b⊕b)⊕c = 0⊕c = c;

  let single = nums[0];

  for (let i = 1; i < nums.length; i++) {
    single ^= nums[i];
  }

  return single;
};
// @lc code=end

/**
 * {@include ../../../../../../.typedoc/problems/136.只出现一次的数字.md}
 *
 * 
 *
 * @group 其他
 */
export const single_number = singleNumber;
