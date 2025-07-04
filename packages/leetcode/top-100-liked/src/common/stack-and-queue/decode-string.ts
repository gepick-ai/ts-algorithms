/*
 * @lc app=leetcode id=394 lang=typescript
 *
 * [394] Decode String
 */

// @lc code=start

// #region code
function decodeString(s: string): string {
  const st1: number[] = []; // 数字栈
  const st2: string[] = []; // 字母栈
  let accNum: number = 0; // 当前累积的数字
  let accStr: string = ''; // 当前累积的字母

  for (let i = 0; i < s.length; i++) {
    if (s[i] >= '0' && s[i] <= '9') {
      accNum = accNum * 10 + (+s[i]);
    }
    else if (s[i].charCodeAt(0) - 'a'.charCodeAt(0) >= 0 && s[i].charCodeAt(0) - 'a'.charCodeAt(0) <= 25) {
      accStr += s[i];
    }
    else if (s[i] === '[') {
      st1.push(accNum);
      st2.push(accStr);

      accNum = 0;
      accStr = '';
    }
    else {
      const times = st1.pop()!;
      const prevStr = st2.pop()!;

      accStr = prevStr + accStr.repeat(times);
    }
  }

  return accStr;
}
// #endregion code

// @lc code=end

/**
 * {@include ../../../../../../.typedoc/leetcode/394.字符串解码/problem.md}
 *
 * @description
 * {@include ../../../../../../.typedoc/leetcode/394.字符串解码/description.md}
 * {@includeCode ./decode-string.ts#code}
 *
 * @group 栈和队列
 * @summary {@include ../../../../../../.typedoc/leetcode/394.字符串解码/summary.md}
 */
export const decode_string = decodeString;
