/*
 * @lc app=leetcode id=394 lang=typescript
 *
 * [394] Decode String
 */

// @lc code=start
// #region code
function decodeString(s: string): string {
  const stack1: number[] = [];
  const stack2: string[] = [];
  let curTimes = 0;
  let curStr = '';

  // 可能碰到的字符：数字 、字母 、[ 、 ]
  // 其中真正需要入栈的只有数字和字母
  // 而[ 和 ] 只是用来保存状态和恢复状态的占位符，它们就相当于一个开关
  for (let i = 0; i < s.length; i++) {
    const char = s[i];

    // 遇到数字，构建多位数(数字不一定是个位 有可能是十位，百位等)
    if (char >= '0' && char <= '9') {
      curTimes = curTimes * 10 + (+char);
    }
    // 保存状态，重置
    else if (char === '[') {
      // 遇到左括号，将当前数字和字符串入栈
      stack1.push(curTimes);
      stack2.push(curStr);
      // 重置当前状态
      curTimes = 0;
      curStr = '';
    }
    // 恢复状态，处理
    else if (char === ']') {
      // 遇到右括号，开始解码
      const preStr = stack2.pop()!;
      const times = stack1.pop()!;
      // 重复字符串
      curStr = preStr + curStr.repeat(times);
    }
    // 遇到字母，直接添加到当前字符串
    else {
      curStr += char;
    }
  }

  return curStr;
}
// #endregion code
// @lc code=end

/**
 *
 * @group 栈与队列
 * @category 栈
 * @summary 双栈，看到「[」保存状态、重置状态，看到「]」恢复状态、处理。
 * @document ../../../../../../.typedoc/docs/394.字符串解码.md
 *
 * @description
 * 1.有分层的概念：比如 3[a2[c]] ， 每一对括号就是一层。"3[a2[c]]" 等价于 "3(a(2(c)))"。遇到 [ 就进入新的一层
 *
 * 数 '[' 的个数
 * "3[a2[c]]"
 *    ^  ^
 *    1  2
 *
 * 有2个 '['，所以有3层
 * 第1层：最外层（没有 '[' 的部分）
 * 第2层：第一个 '[' 到第一个 ']'
 * 第3层：第二个 '[' 到第二个 ']'
 *
 * {@includeCode ./decode-string.ts/#code}
 */
export const decode_string = decodeString;
