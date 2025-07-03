/*
 * @lc app=leetcode id=416 lang=typescript
 *
 * [416] Partition Equal Subset Sum
 */

// @lc code=start

// #region code

// 动态规划
function canPartition(nums: number[]): boolean {
  const sum = nums.reduce((s, c) => s + c, 0);

  // 如果总和是奇数，无法平分
  if (sum % 2 !== 0) {
    return false;
  }

  const target = sum / 2;

  // 分割等和子集，相当于是否能从数组中凑target。0-1背包问题
  // 背包容量：target
  // 物品：nums，体积为nums[i]
  // dp[i][j]表示考虑选取前i个物品是否能凑够容量j

  // 状态转移方程：
  // 选物品i，dp[i][j] = dp[i-1][j-nums[i]];
  // 不选物品i，dp[i][j] = dp[i-1][j]
  // 综上dp[i][j] = dp[i-1][j-nums[i]] || dp[i-1][j]

  const dp: boolean[][] = Array.from({ length: nums.length }, () => new Array(target + 1).fill(false));

  for (let i = 0; i < nums.length; i++) {
    dp[i][0] = true;
  }

  for (let j = 0; j <= target; j++) {
    dp[0][j] = j === nums[0];
  }

  for (let i = 1; i < nums.length; i++) {
    for (let j = 1; j <= target; j++) {
      if (j >= nums[i]) {
        // 只有装得下才考虑选择
        dp[i][j] = dp[i - 1][j - nums[i]] || dp[i - 1][j];
      }
      else {
        // 装不下，只能不选
        dp[i][j] = dp[i - 1][j];
      }
    }
  }

  return dp[nums.length - 1][target];
}

// dfs + 记忆化搜索
function canPartition1(nums: number[]): boolean {
  const totalSum = nums.reduce((s, c) => s + c, 0);

  // 如果总和是奇数，无法平分
  if (totalSum % 2 !== 0) {
    return false;
  }

  const targetSum = totalSum / 2;
  const memo = Array.from({ length: nums.length }, () => new Array(targetSum + 1));
  // 从第i个开始选是否能在数组nums当中找到几个元素相加和为sum
  function dfs(i: number, sum: number): boolean {
    if (sum === 0) {
      return true;
    }

    if (sum < 0 || i === nums.length) {
      return false;
    }

    if (memo[i][sum] !== undefined) {
      return memo[i][sum];
    }

    // 选或者不选i
    const result = dfs(i + 1, sum - nums[i]) || dfs(i + 1, sum);

    memo[i][sum] = result;

    return result;
  }

  return dfs(0, targetSum);
}
// #endregion code

// @lc code=end

/**
 * {@include ../../../../../../.typedoc/problems/416.分割等和子集.md}
 *
 * @description
 * {@includeCode ./partition-equal-subset-sum.ts/#code}
 *
 * @group 动态规划
 * @summary #### 416.分割等和子集 ✅
 *
 * 0-1背包：背包容量：sum / 2 ；物品：nums。
 */
export const partition_equal_subset_sum = canPartition;
