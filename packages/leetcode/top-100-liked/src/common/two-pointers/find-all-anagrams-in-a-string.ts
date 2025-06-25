/*
 * @lc app=leetcode id=438 lang=typescript
 *
 * [438] Find All Anagrams in a String
 */

// @lc code=start
function findAnagrams(s: string, p: string): number[] {
  const ans: number[] = [];

  // 统计p中每一个出现的字母的次数
  const cntP = new Array(26).fill(0);
  for (const char of p) {
    cntP[char.charCodeAt(0) - 'a'.charCodeAt(0)]++;
  }
  const cntS = new Array(26).fill(0);

  let right = 0;

  while (right < s.length) {
    // 增加对应看到的字母的次数
    cntS[s[right].charCodeAt(0) - 'a'.charCodeAt(0)]++;

    let left = right - p.length + 1;

    // 说明窗口长度够了
    if (left >= 0) {
      if (isAnagrams(cntS, cntP)) {
        ans.push(left);
      }

      cntS[s[left].charCodeAt(0) - 'a'.charCodeAt(0)]--;
    }

    right++;
  }

  return ans;
};

function isAnagrams(cntS: number[], cntP: number[]): boolean {
  for (let i = 0; i < 26; i++) {
    if (cntS[i] !== cntP[i]) {
      return false;
    }
  }
  return true;
}

// @lc code=end

/**
 * 既然要是异位词，那么两个单词的每个字母对应出现次数应该是一样的。
 *
 * @group 双指针
 * @category 滑动窗口
 */
export const find_all_anagrams_in_a_string = findAnagrams;
