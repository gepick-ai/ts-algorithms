/*
 * @lc app=leetcode id=28 lang=typescript
 *
 * [28] Find the Index of the First Occurrence in a String
 */

// @lc code=start
function strStr(haystack: string, needle: string): number {
  if (haystack.length < needle.length) {
    return -1;
  }

  // 2个指针h1，h2, 用来检查haystack一段子串
  // 1个指针n1，用来检查needle

  let h1 = 0;
  let h2 = 0;
  let n1 = 0;

  // 以needle为标准，从左往右检查。发现相应位置字符相同，h2和n1都往右跑。
  // 如果h2和n1往右跑的过程发现一个字符对应不上，那么h1往右跑，h2来到h1位置。n1回到0位置。
  // 接着进行下一轮检查，h2和n1都往右跑，重复上述操作。
  // 如果n1跑到尽头，说明找到答案了。否则如果当h1来到的位置开始往后的子串长度<needle.length，就没必要继续了。
  while (haystack.length - h1 >= needle.length) {
    if (haystack[h2] === needle[n1]) {
      h2++;
      n1++;

      if (n1 === needle.length) {
        return h1;
      }
    }
    else {
      h1++;
      h2 = h1;
      n1 = 0;
    }
  }

  return -1;
};
// @lc code=end

export const find_the_index_of_the_first_occurrence_in_a_string = strStr;
