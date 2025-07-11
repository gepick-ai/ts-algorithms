/*
 * @lc app=leetcode id=438 lang=typescript
 *
 * [438] Find All Anagrams in a String
 */

// @lc code=start

// #region code
function findAnagrams(s: string, p: string): number[] {
  const ans: number[] = [];
  const hash = new Array(26).fill(0);
  const k = p.length;
  const code = (c: string) => c.charCodeAt(0) - 'a'.charCodeAt(0);

  // 统计p中每个字符的需求
  for (const c of p) {
    hash[code(c)]--;
  }

  for (let l = 0, r = 0; r < s.length; ++r) {
    // 入
    hash[code(s[r])]++;

    // 出
    if (r - l + 1 > k) {
      hash[code(s[l])]--;
      l++;
    }

    // 记
    if (r - l + 1 === k) {
      if (hash.every(x => x === 0)) {
        ans.push(l);
      }
    }
  }
  return ans;
}
// #endregion code

// @lc code=end

/**
 * {@include ../../../../../../.typedoc/leetcode/438.找到字符串中所有字母异位词/problem.md}
 *
 * @description
 * {@includeCode ./find-all-anagrams-in-a-string.ts/#code}
 *
 * @group 双指针
 * @summary {@include ../../../../../../.typedoc/leetcode/438.找到字符串中所有字母异位词/summary.md}
 */
export const find_all_anagrams_in_a_string = findAnagrams;
