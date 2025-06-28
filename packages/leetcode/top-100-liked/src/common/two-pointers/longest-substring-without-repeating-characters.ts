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
 * @group 双指针
 * @document ../../../../../../.typedoc/docs/3.无重复字符的最长子串.md
 *
 * @category 滑动窗口
 * @summary 滑动窗口 + Set记录当前窗口中的字符
 *
 * @description
 *
 * 解题思路：看到子数组（子串）可以想想滑动窗口行不行。如果是子序列的话一般就和滑动窗口没有关系了
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
 * {@includeCode ./longest-substring-without-repeating-characters.ts/#code}
 *
 */
export const longest_substring_without_repeating_characters = lengthOfLongestSubstring;
