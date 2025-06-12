/*
 * @lc app=leetcode id=49 lang=typescript
 *
 * [49] Group Anagrams
 */

// @lc code=start
function groupAnagrams(strs: string[]): string[][] {
  const result: string[][] = [];
  const map = new Map<string, string[]>();

  for (let i = 0; i < strs.length; i++) {
    const target = strs[i].split('').sort().join('');
    const ans = map.get(target);

    if (!ans) {
      map.set(target, [strs[i]]);
    }
    else {
      ans.push(strs[i]);

      map.set(target, ans);
    }
  }

  for (const value of map.values()) {
    result.push(value);
  }

  return result;
};

// @lc code=end

/**
 * 如果是字母异位词，那么排序后，字母的顺序是相同的。我们将排序后的字符串当作key，将字母异位词分组当作value存入map当中。
 * 你只需要通过转换每个字符串获取map的key就可以找到自己应该去的单词分组，加入这个分组即可。
 */
export const group_anagrams = groupAnagrams;
