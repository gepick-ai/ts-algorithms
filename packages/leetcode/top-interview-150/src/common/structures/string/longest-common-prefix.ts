/*
 * @lc app=leetcode id=14 lang=typescript
 *
 * [14] Longest Common Prefix
 */

// @lc code=start
function longestCommonPrefix(strs: string[]): string {
  let first = strs[0]; // 拿第一个作为标准

  let commonPrefix = '';
  let canAdd = true; // 假设当前检查字符能够加入公共前缀

  // 拿第一个的每个位置字符出来检查
  for (let i = 0; i < first.length; i++) {
    // 判断整个数组的这个位置的字符是否跟shortest这个位置的字符完全一致，是的话加入公共前缀commonPrefix
    for (let j = 0; j < strs.length; j++) {
      if (first[i] !== strs[j][i]) {
        canAdd = false;
        break;
      }
    }

    if (canAdd) {
      commonPrefix += first[i];
    }
  }

  return commonPrefix;
};
// @lc code=end

export const longest_common_prefix = longestCommonPrefix;
