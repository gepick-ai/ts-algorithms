/*
 * @lc app=leetcode.cn id=20 lang=typescript
 *
 * [20] 有效的括号
 */

// @lc code=start
function isValid(s: string): boolean {
  if (s.length <= 1) {
    return false;
  }

  // 根据2，3：每个右边都有一个左边对应，用结构map记忆对应关系，我们记忆右、左关系。即我们看到是一个右，我就开始判断关系

  const map = new Map<string, string>(Object.entries({
    "}": "{",
    "]": "[",
    ")": "(",
  }));
    // 为了知道是一个右，我们还需一个set来表示右边集合
  const rightSet = new Set<string>(['}', ')', ']']);
  let helpStack: string[] = [];

  // 现在我们遍历整个s查看每个括号
  for (const p of s) {
    // 如果是左，入栈
    if (!rightSet.has(p)) {
      helpStack.push(p);
    }
    else {
      // 否则如果是右边，出栈顶元素，拿map判断是否对应
      const lp = helpStack.pop();
      if (map.get(p) !== lp) {
        return false;
      }
    }
  }

  if (helpStack.length > 0) {
    return false;
  }

  return true;
};
// @lc code=end

/**
 * {@include ../../../../../../.typedoc/problems/20.有效的括号.md}
 *
 * 
 *
 * @answer
 * 思路：用一个map记录每一个括号的对应关系，再用set记录下左括号
 * 遇到左括号就入栈，遇到右括号就出栈，
 * 然后判断出栈的左括号是否和右括号匹配：方式就是通过右括号拿回左括号，然后判断是否相等
 * 但是这里有个问题，就是如果遇到右括号，但是栈里面没有左括号了，那么就直接返回false
 * 最后判断栈是否为空，如果为空就是true，否则就是false
 *
 *  @group 栈与队列
 */
export const valid_parentheses = isValid;
