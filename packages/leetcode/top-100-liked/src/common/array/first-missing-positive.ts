/*
 * @lc app=leetcode id=41 lang=typescript
 *
 * [41] First Missing Positive
 */

// @lc code=start
function firstMissingPositive(nums: number[]): number {
  const n = nums.length;

  // 将所有数都归位到正确的位置
  for (let i = 0; i < n; i++) {
    // 1 <= nums[i] && nums[i] <= n 说明数在1到N之间
    // 但是这样行不通，因为可能有数字重复，比如[3,4,3,1]，3应该放在nums[2]的位置，但是nums[2]的位置已经有一个3了，我们需要处理这个情况，否则就是死循环了。
    // 我们的处理方式是，判断nums[i]要去的地方是否已经是正确的数了，如果是，那么说明nums[i]已经归位了，直接跳过。代码上我们用nums[i] !== nums[nums[i] - 1]来判断。
    while (nums[i] > 0 && nums[i] <= n && nums[i] !== nums[nums[i] - 1]) {
      // 按照数组的位置来放置，那么nums[i]应该放在nums[i] - 1的位置，比如nums[i] = 3，那么3应该放在nums[2]的位置
      const j = nums[i] - 1; // 减一是因为数组下标从 0 开始。
      [nums[i], nums[j]] = [nums[j], nums[i]]; // 把nums[i]的数交换到正确位置，但是我们需要继续查看现在nums[i]的数是否正确，所以需要继续while循环
    }
  }

  // 在所有数都归位到正确的位置后，我们开始检查每个位置，看下该位置的数是否正确。数组中每个位置的数都应该是i+1，因为数组下标从0开始，所以i+1就是该位置的数。
  for (let i = 0; i < n; i++) {
    if (nums[i] !== i + 1) {
      return i + 1;
    }
  }

  // 如果1到N都在数组中，那就返回N+1
  return n + 1;
};
// @lc code=end

/**
 * {@include ../../../../../../.typedoc/leetcode/41.缺失的第一个正数/problem.md}
 *
 * @group 数组
 * @summary {@include ../../../../../../.typedoc/leetcode/41.缺失的第一个正数/summary.md}
 */
export const first_missing_positive = firstMissingPositive;
