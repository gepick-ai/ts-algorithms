/*
 * @lc app=leetcode id=300 lang=typescript
 *
 * [300] Longest Increasing Subsequence
 */

// @lc code=start
function lengthOfLIS(nums: number[]): number {
  // 1、dp[i]定义：以第i个数字为结尾的最长递增子序列的长度
  // 2、状态转移方程：设j变量，从第0个数字开始依次查看，直到看到i-1个。
  //               如果一次查看发现nums[i] > nums[j]，那么说明nums[i]可以接在以当前j位置为结尾的最长递增子序列的后头
  //               否则dp[i] =1(默认就是1，所以不需要写dp[i] = 1这一步)

  const dp: number[] = new Array(nums.length).fill(1); // 默认以第i个数字为结尾的最长递增子序列的长度最少就是1，即这个数字本身
  let max = 1;

  for (let i = 1; i < nums.length; i++) {
    // 依次查看[0,i)这个范围的dp[j]，判断是否能够在它们的基础上接上一个nums[i]
    for (let j = 0; j < i; j++) {
      if (nums[i] > nums[j]) {
        dp[i] = Math.max(dp[i], dp[j] + 1);
      }
    }
    max = Math.max(dp[i], max);
  }

  return max;
};
// @lc code=end

/**
 *
 * dp[i] 表示以第i个数字结尾的最长递增子序列的长度
 * 这道题里头dp[i]需要多次更新得到最终的值，它不是一次计算得到的。
 *
 * 我们要判断以第i个数字为结尾的最长递增子序列的长度，我们可以思考：
 * 以第i-1个数字为结尾的最长递增子序列，如果能够让nums[i]接后边，那么dp[i] = dp[i-1] + 1
 * 但是这个思考不够完整，因为第i-1个位置的数字不一定能够被nums[i]接上。所以对于位置i，它还要继续查看是否能够接在i-2,i-3等等位置后边。
 * 因为它有可能是从前面几个状态转移过来的。状态转移不一定是从相邻状态转移过来的
 *
 * @category 动态规划
 *
 */
export const longest_increasing_subsequence = lengthOfLIS;
