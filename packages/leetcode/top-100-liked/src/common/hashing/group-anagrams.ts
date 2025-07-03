/*
 * @lc app=leetcode id=49 lang=typescript
 *
 * [49] Group Anagrams
 */

// @lc code=start

// #region code
function groupAnagrams(strs: string[]): string[][] {
  const map = new Map<string, string[]>();
  const ans: string[][] = [];

  for (let i = 0; i < strs.length; i++) {
    const key = strs[i].split('').sort().join('');
    const group = map.get(key) ?? [];

    group.push(strs[i]);
    map.set(key, group);
  }

  for (const [_, g] of map) {
    ans.push(g);
  }

  return ans;
};
// #endregion code

// @lc code=end

/**
 * {@include ../../../../../../.typedoc/problems/49.字母异位词分组.md}
 *
 * @answer
 * 如果是字母异位词，那么排序后，字母的顺序是相同的。我们将排序后的字符串当作key，将字母异位词分组当作value存入map当中。
 * 你只需要通过转换每个字符串获取map的key就可以找到自己应该去的单词分组，加入这个分组即可。
 *
 * {@includeCode ./group-anagrams.ts/#code}
 *
 * @group 哈希表
 * @summary #### 49.字母异位词分组 ✅
 *
 * 异位词排序后可以得到同一个单词，该单词作为map key，value是所有异位词的集合。所以只需要转换每个异位词排序后的单词，如果是一样的，都会找到map同一个key，进入自己的分组就好了。
 */
export const group_anagrams = groupAnagrams;
