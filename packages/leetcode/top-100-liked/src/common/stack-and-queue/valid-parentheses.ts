/*
 * @lc app=leetcode.cn id=20 lang=typescript
 *
 * [20] 有效的括号
 */

// @lc code=start

// #region code
function isValid(s: string): boolean {
  const map = new Map<string, string>(Object.entries({
    ')': '(',
    ']': '[',
    '}': '{',
  }));
  const stack: string[] = [];

  // 维护右括号到左括号的映射关系 + 从左往右看字符碰到左括号入栈，碰到右括号就让左括号出栈然后匹配映射关系
  for (let i = 0; i < s.length; i++) {
    // 如果是右括号
    if (map.has(s[i])) {
      const p = stack.pop()!;
      if (map.get(s[i]) !== p) {
        return false;
      }
    }
    else {
      // 否则是左括号，入栈
      stack.push(s[i]);
    }
  }

  // 如果栈中还有字符，说明没匹配完全，否则s为有效括号
  return stack.length === 0;
};
// #endregion code

// @lc code=end

/**
 * {@include ../../../../../../.typedoc/leetcode/20.有效的括号/problem.md}
 *
 * @description
 * {@include ../../../../../../.typedoc/leetcode/20.有效的括号/description.md}
 * {@includeCode ./valid-parentheses.ts#code}
 *
 * @group 栈和队列
 * @summary {@include ../../../../../../.typedoc/leetcode/20.有效的括号/summary.md}
 */
export const valid_parentheses = isValid;
