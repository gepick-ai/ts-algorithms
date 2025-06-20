/*
 * @lc app=leetcode id=131 lang=typescript
 *
 * [131] Palindrome Partitioning
 */

// @lc code=start
function partition(s: string): string[][] {
  const n = s.length;
  const ans: string[][] = [];
  const path: string[] = [];

  // 考虑>=i的下标为起始位置的子串该如何分割
  function dfs(i: number) {
    if (i === n) {
      ans.push([...path]);
      return;
    }

    // 枚举子串的结束位置
    for (let j = i; j < n; j++) {
      const str = s.slice(i, j + 1);
      // 如果是回文串
      if (str.split('').reverse().join('') === str) {
        path.push(str);
        dfs(j + 1); // 当前层完成后，考虑以>=j+1为起始位置的子串该如何分割
        path.pop(); // 在本层下一次循环前恢复现场腾出对应位置放新的尝试
      }
    }
  }

  dfs(0);

  return ans;
};
// @lc code=end

/**
 * @category 回溯算法
 */
export const palindrome_partitioning = partition;
