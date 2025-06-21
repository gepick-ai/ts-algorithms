/*
 * @lc app=leetcode id=46 lang=typescript
 *
 * [46] Permutations
 */

// @lc code=start
function permute(nums: number[]): number[][] {
  const n = nums.length;
  const ans: number[][] = [];
  const path: number[] = [];

  // 从>=i的下标开始构造全排列，剩余可选的数字从s中选取
  function dfs(i: number, s: Set<number>) {
    if (i === n) {
      ans.push([...path]);
      return;
    }

    for (const num of s) {
      path[i] = num;
      const copy = new Set(s);
      copy.delete(num);
      dfs(i + 1, copy);
    }
  }

  dfs(0, new Set(nums));

  return ans;
}
// @lc code=end

/**
 * @category 回溯算法
 */
export const permutations = permute;
