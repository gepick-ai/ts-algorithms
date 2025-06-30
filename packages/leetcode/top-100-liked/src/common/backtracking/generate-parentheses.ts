/*
 * @lc app=leetcode id=22 lang=typescript
 *
 * [22] Generate Parentheses
 */

// @lc code=start

// #region code
function generateParenthesis(n: number) {
  const ans: string[] = [];

  // 使用剩余的left和right两种括号来构建字符串
  function dfs(str: string, left: number, right: number) {
    // 如果能使用的左括号数量小于0，或者能使用的左括号数量大于能使用的右括号数量，则返回
    if (left < 0 || left > right) {
      return;
    }
    // 如果能使用的左括号数量和能使用的右括号数量都为0，则将当前字符串加入答案
    if (left === 0 && right === 0) {
      ans.push(str);
      return;
    }

    // 选左括号的走法，能使用的左括号数量减1
    dfs(str + '(', left - 1, right);
    // 选右括号的走法，能使用的右括号数量减1
    dfs(str + ')', left, right - 1);
  }

  dfs('', n, n);

  return ans;
}
// #endregion code
// @lc code=end

/**
 * {@include ../../../../../../.typedoc/problems/22.括号生成.md}
 *
 * 
 *
 * @includeCode ./generate-parentheses.ts/#code
 *
 * @group 回溯算法
 */
export const generate_parentheses = generateParenthesis;
