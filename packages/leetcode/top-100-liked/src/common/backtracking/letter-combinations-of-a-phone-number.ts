/*
 * @lc app=leetcode id=17 lang=typescript
 *
 * [17] Letter Combinations of a Phone Number
 */

// @lc code=start

// #region code
function letterCombinations(digits: string): string[] {
  if (digits.length === 0) {
    return [];
  }

  const mapping = ['', '', 'abc', 'def', 'ghi', 'jkl', 'mno', 'pqrs', 'tuv', 'wxyz'];
  const path: string[] = [];
  const ans: string[] = [];

  function dfs(i: number) {
    if (i === digits.length) {
      ans.push(path.join(''));
      return;
    }

    const letters = mapping[+digits[i]];

    for (const c of letters) {
      path[i] = c;
      // 既然枚举完path[i]了，接下来要枚举path[i+1]
      dfs(i + 1);
    }
  }

  dfs(0);

  return ans;
};
// #endregion code

// @lc code=end

/**
 * {@include ../../../../../../.typedoc/problems/17.电话号码的字母组合.md}
 *
 * @description
 * 如果我们把digits转换成对应字母后。实际上题目求的就是从每个字母中选一个字母，然后组合成一个字符串。
 * 这道题是一道组合型回溯题。
 *
 * 用一个path数组记录递归路径上枚举的字母。
 *
 * **回溯三问**
 * - 当前操作？枚举path[i]要填入的字母
 * - 子问题？构造字符串>=i的部分
 * - 下一个子问题？构造字符串>=i+1的部分
 * dfs(i) → dfs(i+1)，递归参数的i的含义是对于>=i的这部分我们还需要枚举。
 *
 *
 * {@includeCode ./letter-combinations-of-a-phone-number.ts/#code}
 *
 *
 * @group 回溯算法
 * @summary #### 17.电话号码的字母组合 ✅
 *
 * 组合型回溯。
 */
export const letter_combinations_of_a_phone_number = letterCombinations;
