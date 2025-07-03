/*
 * @lc app=leetcode id=5 lang=typescript
 *
 * [5] Longest Palindromic Substring
 */

// @lc code=start

// #region code
function longestPalindrome(s: string): string {
  // 对i..j这个区间的子串，如果它是一个回文串，那肯定有s[i] === s[j] && 除去这两个字符剩下的子串还是回文串
  // dp[i][j]：表示i到j这个区间的子串是否是一个回文串
  // 递推公式： dp[i][j] = s[i]===s[j] && dp[i+1][j-1]，其中i<=j
  // 初始化：1.单个字符串本身就是回文串，所以dp[i][i] = true;
  //       2. 如果字符串长度只有2，那么只需要判断s[i] === s[j]，即dp[i][i+1] = s[i] === s[j]
  const dp: boolean[][] = Array.from({ length: s.length }, () => new Array(s.length).fill(false));

  // 单个字符串本身就是回文串
  for (let i = 0; i < s.length; i++) {
    dp[i][i] = true;
  }

  let ans = s[0];
  let max = 1;
  let start = 0;

  // 对于字符串>=2的情况，我们开始枚举字符串的长度
  // 从长度2枚举到s.length;
  for (let len = 2; len <= s.length; len++) {
    // 枚举左边界
    for (let l = 0; l <= s.length - len; l++) {
      const r = l + len - 1;

      if (len <= 2) {
        dp[l][r] = s[l] === s[r];
      }
      else {
        dp[l][r] = s[l] === s[r] && dp[l + 1][r - 1];
      }

      if (dp[l][r]) {
        start = l;
        max = len;
      }
    }
  }

  return s.slice(start, start + max);
};
// #endregion code

// @lc code=end

/**
 * {@include ../../../../../../.typedoc/problems/5.最长回文子串.md}
 *
 * @answer
 * 如果s[i] === s[j]，那么s[i..j]是回文串的条件是s[i+1..j-1]是回文串。
 * 如果s[i] !== s[j]，那么s[i..j]不是回文串。
 *
 * 初始化：
 * 1. 单个字符串本身就是回文串，所以dp[i][i] = true;
 * 2. 如果字符串长度只有2，那么只需要判断s[i] === s[j]，即dp[i][i+1] = s[i] === s[j]
 *
 *
 *
 * {@includeCode ./longest-palindromic-substring.ts/#code}
 *
 * @group 动态规划
 * @summary #### 5.最长回文子串 ✅
 *
 * - [i,j]区间内的子串是否是回文串，在满足s[i] === s[j]的前提下，取决于[i+1,j-1]区间内的子串是否是回文串。
 * - 我们可以不断枚举子串长度，然后从左到右枚举左边界，根据左边界和长度计算右边界，然后判断[i,j]区间内的子串是否是回文串。所以动态规划的做法只不过是用dp表记录了是否是回文串，并没比暴力枚举快多少。优化了检查的逻辑，并没有改变时间复杂度。
 */
export const longest_palindromic_substring = longestPalindrome;
