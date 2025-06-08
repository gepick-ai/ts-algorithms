/*
 * @lc app=leetcode id=151 lang=typescript
 *
 * [151] Reverse Words in a String
 */

import { length_of_last_word } from './length-of-last-word';

// @lc code=start
function reverseWords(s: string): string {
  let temp = "";
  let end = s.length - 1;

  while (true) {
    while (end >= 0 && s[end] === ' ') {
      end--;
    }
    
    let start = end;

    while (start >= 0 && s[start] !== ' ') {
      start--;
    }

    let wordLoc = start + 1;

    while (wordLoc <= end) {
      temp += s[wordLoc];
      wordLoc++;
    }

    temp += ' ';
    end = start;

    if (start < 0) {
      break;
    }
  }

  end = temp.length - 1;
  while (end >= 0 && temp[end] === ' ') {
    end--;
  }

  let i = 0;
  let ans = '';

  // 处理最后一个单词可能加上了多余的空格的情况
  while (i <= end) {
    ans += temp[i];
    i++;
  }

  return ans;
};
// @lc code=end

/**
 * 字符串题目，用多指针，反向遍历，从后往前遍历，找到每个单词，然后拼接起来。
 * 与题目 {@link length_of_last_word} 部分做法类似。
 */
export const reverse_words_in_a_string = reverseWords;
