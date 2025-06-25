/*
 * @lc app=leetcode id=416 lang=typescript
 *
 * [416] Partition Equal Subset Sum
 */

// @lc code=start
function canPartition(nums: number[]): boolean {
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
// @lc code=end

/**
 * @group 动态规划
 */
export const partition_equal_subset_sum = canPartition;
