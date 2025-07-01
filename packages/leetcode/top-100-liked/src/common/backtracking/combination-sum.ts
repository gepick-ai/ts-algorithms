/*
 * @lc app=leetcode id=39 lang=typescript
 *
 * [39] Combination Sum
 */

// @lc code=start

// #region code

// 选或者不选的角度 （组合型回溯）
function combinationSum(candidates: number[], target: number): number[][] {
  const ans: number[][] = [];
  const path: number[] = [];

  function dfs(i: number, k: number) {
    if (k === target) {
      ans.push([...path]);
      return;
    }

    if (k > target) {
      return;
    }

    if (i === candidates.length) {
      return;
    }

    dfs(i + 1, k);

    path.push(candidates[i]);
    dfs(i, k + candidates[i]);
    path.pop();
  }

  dfs(0, 0);

  return ans;
};

// #endregion code

// @lc code=end

/**
 * {@include ../../../../../../.typedoc/problems/39.组合总和.md}
 *
 *
 *
 * @group 回溯算法
 * @summary #### 39.组合总和 ✅
 *
 * 组合型回溯。
 */
export const combination_sum = combinationSum;
