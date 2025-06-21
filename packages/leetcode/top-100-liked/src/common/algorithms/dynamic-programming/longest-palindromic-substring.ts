/*
 * @lc app=leetcode id=5 lang=typescript
 *
 * [5] Longest Palindromic Substring
 */

// @lc code=start
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

  let begin = 0;
  let maxLen = 1;

  // 对于字符串>=2的情况，我们开始枚举字符串的长度
  // 从长度2枚举到s.length;
  for (let i = 2; i <= s.length; i++) {
    // 对于每一种长度的子串，我们继续尝试各种起点，然后根据长度找到对应的终点end，接着判断对应的子串
    for (let start = 0; start < s.length - i + 1; start++) {
      const end = start + i - 1;

      if (s[start] !== s[end]) {
        dp[start][end] = false;
      }
      else {
        if (end - start + 1 <= 2) {
          dp[start][end] = true;
        }
        else {
          dp[start][end] = dp[start + 1][end - 1];
        }
      }

      if (dp[start][end] && end - start + 1 > maxLen) {
        begin = start;
        maxLen = end - start + 1;
      }
    }
  }

  return s.slice(begin, begin + maxLen);
};
// @lc code=end

/**
 *
 * @category 动态规划
 */
export const longest_palindromic_substring = longestPalindrome;
