/*
 * @lc app=leetcode id=58 lang=typescript
 *
 * [58] Length of Last Word
 */

// @lc code=start
function lengthOfLastWord(s: string): number {
  // 获取整个s的长度
  // 从后往前遍历，先用end指针trim空字符串，从end开始放置一个start指针，不断往前寻找空字符，当start停止的时候，end-start就是最后一个单词长度
  let end = s.length - 1;

  while (end >= 0 && s[end] === ' ') {
    end--;
  }

  let start = end;

  while (start >= 0 && s[start] !== ' ') {
    start--;
  }

  return end - start;
};
// @lc code=end

/**
 * 双指针，反向遍历就好了
 */
export const length_of_last_word = lengthOfLastWord;
