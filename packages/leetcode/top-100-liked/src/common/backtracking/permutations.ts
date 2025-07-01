/*
 * @lc app=leetcode id=46 lang=typescript
 *
 * [46] Permutations
 */

// @lc code=start

// #region code

function permute(nums: number[]): number[][] {
  const n = nums.length;
  const path: number[] = [];
  const used: boolean[] = new Array(n).fill(false);
  const ans: number[][] = [];

  // 从>=i的下标开始构造全排列，剩余可选的数字从s中选取
  function dfs(i: number) {
    if (i === n) {
      ans.push([...path]);
      return;
    }

    for (let j = 0; j < n; j++) {
      if (!used[j]) {
        path[i] = nums[j];
        used[j] = true;
        dfs(i + 1);
        used[j] = false;
      }
    }
  }

  dfs(0);

  return ans;
}
// #endregion code

// @lc code=end

/**
 * {@include ../../../../../../.typedoc/problems/46.全排列.md}
 *
 *
 *
 * @group 回溯算法
 * @summary #### 46.全排列 ✅
 *
 * 排列型回溯。
 */
export const permutations = permute;
