/*
 * @lc app=leetcode id=392 lang=typescript
 *
 * [392] Is Subsequence
 */

// @lc code=start
function isSubsequence(s: string, t: string): boolean {
  // 找子序列

  // 设计一个指针p1放在s上从左往右跑动
  // 设计一个指针p2放在t上从左往右跑动

  // 由于需要寻找子序列，意思是出现字母相对位置不变，短子串的字母在长子串中出现，而且短子串中出现的字母相对位置不变

  let p1 = 0;
  let p2 = 0;

  // 让p2一直往右边跑，如果p1每指向的字母在p2跑动过程中出现了，那么p1往前跑动一步，直到p2跑动完成，如果p1还没跑动到最右边。说明没子序列。
  while (p2 < t.length) {
    if (s[p1] === t[p2]) {
      p1++;
    }

    p2++;
  }

  if (p1 < s.length) {
    return false;
  }

  return true;
};
// @lc code=end

/**
 * 判断子序列，给出了子序列定义说明相对位置固定。那只要查找短串的字母是否在长串中依次出现就好了。
 * 设计两个指针，一个指针p1指向短串，一个指针p2指向长串。
 * 让p2一直往右边跑，如果p1每指向的字母在p2跑动过程中出现了，那么p1往前跑动一步，直到p2跑动完成，如果p1还没跑动到最右边。说明没子序列。
 */
export const is_subsequence = isSubsequence;
