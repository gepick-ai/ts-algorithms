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
 *
 * {@include ../../../../../../.typedoc/problems/3.无重复字符的最长子串.md}
 *
 *
 * 
 * @summary 滑动窗口 + Map记录当前窗口中的字符
 *
 * @description
 * 本题用滑动窗口和Map记录字符出现次数的方法，寻找最长无重复子串。
 * - 用两个指针l和r维护一个窗口，窗口内没有重复字符。
 * - 用Map记录窗口内每个字符出现的次数。
 * - 每次右指针r向右扩展一个字符，Map中该字符次数加1。
 * - 如果某个字符次数大于1，说明窗口内有重复字符，就不断移动左指针l，把左端字符次数减1，直到窗口内没有重复字符。
 * - 每次窗口合法（没有重复字符）时，更新最长子串的长度。
 * - 最后返回最长的长度。
 * 形象比喻：就像用尺子量一段没有重复字母的区间，遇到重复就从左边一个个移出，直到没有重复为止。
 *
 * {@includeCode ./longest-substring-without-repeating-characters.ts/#code}
 *
 * @group 双指针
 */
export const longest_substring_without_repeating_characters = lengthOfLongestSubstring;
