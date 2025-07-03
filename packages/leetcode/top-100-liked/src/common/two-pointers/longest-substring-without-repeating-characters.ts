/*
 * @lc app=leetcode id=3 lang=typescript
 *
 * [3] Longest Substring Without Repeating Characters
 */
// @lc code=start

// #region code
function lengthOfLongestSubstring(s: string): number {
  const map = new Map<string, number>(); // 维护从下标 left 到下标 right 的字符
  let ans = 0;

  for (let l = 0, r = 0; r < s.length; r++) {
    map.set(s[r], (map.get(s[r]) ?? 0) + 1);

    while (map.get(s[r])! > 1) { // 窗口内有重复字母
      map.set(s[l], map.get(s[l])! - 1); // 移除窗口左端点字母
      l++; // 缩小窗口
    }

    ans = Math.max(ans, r - l + 1);
  }

  return ans;
}
// #endregion code

// @lc code=end

/**
 * {@include ../../../../../../.typedoc/leetcode/3.无重复字符的最长子串/problem.md}
 *
 * @description

 * {@includeCode ./longest-substring-without-repeating-characters.ts/#code}
 *
 * @group 双指针
 * @summary {@include ../../../../../../.typedoc/leetcode/3.无重复字符的最长子串/summary.md}
 */
export const longest_substring_without_repeating_characters = lengthOfLongestSubstring;
