/*
 * @lc app=leetcode id=3 lang=typescript
 *
 * [3] Longest Substring Without Repeating Characters
 */
function lengthOfLongestSubstring(s: string): number {
  const set = new Set<string>(); // 存放字母，来判断是否有重复字符

  let start = 0;
  let end = 0;
  let max = 0;

  while (end < s.length) {
    set.add(s[end]);

    max = Math.max(end - start + 1, max);

    end++;

    while (set.has(s[end])) {
      set.delete(s[start]);
      start++;
    }
  }

  return max;
};
// @lc code=end

/**
 * 无重复字符的最长子串
 *
 * 解题思路：
 * 1. 使用滑动窗口 + Set记录当前窗口中的字符
 * 2. 当遇到重复字符时，不断移动左指针直到删除重复字符
 * 3. 不断更新最大长度
 *
 * 示例：
 * s = "abcabcbb"
 * 输出: 3 ("abc")
 *
 * 过程：
 * [a]bcabcbb -> [ab]cabcbb -> [abc]abcbb -> a[bca]bcbb -> ab[cab]cbb -> abc[abc]bb
 *
 * 关键点：
 * 1. 使用Set来记录当前窗口中的字符
 * 2. 当遇到重复字符时，需要不断移动左指针直到删除重复字符
 * 3. 每次移动右指针时都要更新最大长度
 *
 * @category 滑动窗口与双指针
 */
export const longest_substring_without_repeating_characters = lengthOfLongestSubstring;
