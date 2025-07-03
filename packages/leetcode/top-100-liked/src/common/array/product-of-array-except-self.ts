/*
 * @lc app=leetcode id=238 lang=typescript
 *
 * [238] Product of Array Except Self
 */

// @lc code=start
function productExceptSelf(nums: number[]): number[] {
  // 每个位置的左边累乘
  let leftHelp = new Array(nums.length).fill(1);
  let res = 1;

  for (let i = 0; i < nums.length - 1; i++) {
    // 位0左边累乘我们看作是1
    // 位0就是位1左边的累乘，将结果放在help[1]
    // 位1就是位2左边的累乘，将结果放在help[2]
    // 位i就是位i+1左边的累乘，将结果放在help[i+1]
    res *= nums[i];

    leftHelp[i + 1] = res;
  }

  // 每个位置的右边累乘
  let rightHelp = new Array(nums.length).fill(1);

  res = 1;

  for (let i = nums.length - 1; i > 0; i--) {
    // 位3就是位2右边的累乘
    // 位2就是位1右边的累乘
    // 位n - 1就是位n - 2右边的累乘

    res *= nums[i];
    rightHelp[i - 1] = res;
  }

  let ans: number[] = [];
  for (let i = 0; i < nums.length; i++) {
    // 每个位置的左边累乘 * 每个位置的右边累乘就是这个位置除自己以外其他位置的累乘
    ans[i] = leftHelp[i] * rightHelp[i];
  }

  return ans;
};
// @lc code=end

/**
 * {@include ../../../../../../.typedoc/leetcode/238.除自身以外数组的乘积/problem.md}
 *
 *
 * @description
 * 除自己以外找其他位置的加减乘除，想错位操作。每个位置正常累乘，但是我们想它其实是前一个位置的累乘，或者是后一个位置的累乘。这么一错位，我们就可以得到两个数组，一个数组是前一个位置的累乘，一个数组是后一个位置的累乘。然后我们把这两个数组对应位置相乘，就可以得到除自己以外其他位置的累乘。
 * @group 数组
 * @summary {@include ../../../../../../.typedoc/leetcode/238.除自身以外数组的乘积/summary.md}
 */
export const product_of_array_except_self = productExceptSelf;
