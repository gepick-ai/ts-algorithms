/*
 * @lc app=leetcode id=300 lang=typescript
 *
 * [300] Longest Increasing Subsequence
 */

// @lc code=start

// #region code
function lengthOfLIS(nums: number[]): number {
  // dp[i]表示以i为终点的最长递增子序列的长度
  // 状态转移方程：
  // 不断寻找i之前的终点的最长递增子序列的长度，比如j，如果nums[i] > nums[j]，则最长递增子序列的长度dp[i] = dp[j] + 1
  // 我们不断枚举j来找到以i为终点的最长递增子序列的长度

  // 初始化，所有下标的数最开始都可以看成以自己为开头和终点的最长递增子序列，长度为1

  const dp: number[] = new Array(nums.length).fill(1);
  let ans = 1;

  for (let i = 1; i < nums.length; i++) {
    for (let j = 0; j <= i; j++) {
      if (nums[i] > nums[j]) {
        dp[i] = Math.max(dp[i], dp[j] + 1);
      }
    }
    ans = Math.max(dp[i], ans);
  }

  return ans;
};

// #endregion code

// @lc code=end

/**
 * {@include ../../../../../../.typedoc/leetcode/300.最长递增子序列/problem.md}
 *
 * @description
 *
 * dp[i] 表示以第i个数字结尾的最长递增子序列的长度
 * 这道题里头dp[i]需要多次更新得到最终的值，它不是一次计算得到的。
 *
 * 我们要判断以第i个数字为结尾的最长递增子序列的长度，我们可以思考：
 * 以第i-1个数字为结尾的最长递增子序列，如果能够让nums[i]接后边，那么dp[i] = dp[i-1] + 1
 * 但是这个思考不够完整，因为第i-1个位置的数字不一定能够被nums[i]接上。所以对于位置i，它还要继续查看是否能够接在i-2,i-3等等位置后边。
 * 因为它有可能是从前面几个状态转移过来的。状态转移不一定是从相邻状态转移过来的
 * @group 动态规划
 * @summary {@include ../../../../../../.typedoc/leetcode/300.最长递增子序列/summary.md}
 */
export const longest_increasing_subsequence = lengthOfLIS;
