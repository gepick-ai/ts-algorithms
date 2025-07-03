/*
 * @lc app=leetcode id=78 lang=typescript
 *
 * [78] Subsets
 */

// @lc code=start

// #region code

// 枚举答案的每一个数的角度 （子集型回溯）
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

// 选或者不选的角度 （子集型回溯）
function subsets2(nums: number[]): number[][] {
  const path: number[] = [];
  const ans: number[][] = [];

  function dfs(i: number) {
    if (i === nums.length) {
      ans.push([...path]);
      return;
    }

    dfs(i + 1);

    path.push(nums[i]);
    dfs(i + 1);
    path.pop();
  }

  dfs(0);

  return ans;
}
// #endregion code

/**
 * {@include ../../../../../../.typedoc/leetcode/78.子集/problem.md}
 *
 * @description
 * {@include ./README.md}
 * {@includeCode ./sub-sets.ts/#code}
 *
 * @group 回溯算法
 * @summary {@include ../../../../../../.typedoc/leetcode/78.子集/summary.md}
 */
export const sub_sets = subsets;
