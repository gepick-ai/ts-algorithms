/*
 * @lc app=leetcode id=78 lang=typescript
 *
 * [78] Subsets
 */

// @lc code=start
function subsets(nums: number[]): number[][] {
  const ans: number[][] = [];
  const path: number[] = [];

  function dfs(i: number) {
    ans.push([...path]);

    for (let j = i; j < nums.length; j++) {
      path.push(nums[j]);
      dfs(j + 1);
      path.pop();
    }
  }

  dfs(0);

  return ans;
};

/**
 * @group 回溯算法
 * @category 回溯算法
 */
export const sub_sets = subsets;
