/*
 * @lc app=leetcode id=32 lang=typescript
 *
 * [32] Longest Valid Parentheses
 */

// @lc code=start
// #region code
function longestValidParentheses(s: string): number {
  let ans = 0;
  const stack: number[] = [];

  for (let i = 0; i < s.length; i++) {
    if (s.charAt(i) === '(') {
      stack.push(i);
    }
    else {
      if (stack.length > 0 && s.charAt(stack[stack.length - 1]) === '(') {
        stack.pop();
        if (stack.length > 0) {
          ans = Math.max(ans, i - stack[stack.length - 1]);
        }
        else {
          ans = Math.max(ans, i + 1);
        }
      }
      else {
        stack.push(i);
      }
    }
  }

  return ans;
};
// #endregion code
// @lc code=end

/**
 * {@include ../../../../../../.typedoc/problems/32.最长有效括号.md}
 *
 * 
 *
 * @description
 * 1. 使用栈来记录括号的位置，遇到「(」入栈，遇到「)」出栈。
 * 2. 如果栈为空，则将当前位置入栈。
 * 3. 如果栈不为空，则计算当前位置与栈顶位置的差值，更新最大长度。
 * 4. 如果栈为空，则将当前位置入栈。
 * 5. 如果栈不为空，则计算当前位置与栈顶位置的差值，更新最大长度。
 * 6. 如果栈为空，则将当前位置入栈。
 * {@includeCode ./longest-valid-parentheses.ts/#code}
 *
 * @group 栈与队列
 */
export const longest_valid_parentheses = longestValidParentheses;
