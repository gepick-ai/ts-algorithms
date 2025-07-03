/*
 * @lc app=leetcode id=22 lang=typescript
 *
 * [22] Generate Parentheses
 */

// @lc code=start

// #region code

// 枚举答案的每一个字符的角度 （组合型回溯）
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

// 选或者不选的角度 （组合型回溯）
function generateParenthesis2(n: number) {
  const m = n * 2;
  const ans: string[] = [];
  const path: string[] = [];

  // dfs表示从>=i的下标范围构造括号字符串，当时用到了l个左括号。
  function dfs(i: number, l: number) {
    if (i === m) {
      ans.push(path.join(''));
      return;
    }

    if (l < n) {
      path[i] = '(';
      dfs(i + 1, l + 1);
    }

    // i代表已经构造到第i个位置，l代表已经使用了l个左括号。
    // 如果i - l < l，则说明右括号数量小于左括号数量，可以添加右括号。
    if (i - l < l) {
      path[i] = ')';
      dfs(i + 1, l);
    }
  }

  dfs(0, 0);

  return ans;
}

// #endregion code
// @lc code=end

/**
 * {@include ../../../../../../.typedoc/problems/22.括号生成.md}
 *
 * @answer
 *
 *
 * @includeCode ./generate-parentheses.ts/#code
 *
 * @group 回溯算法
 * @summary #### 22.括号生成 ✅
 *
 * 组合型回溯。
 */
export const generate_parentheses = generateParenthesis;
