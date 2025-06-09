/*
 * @lc app=leetcode id=205 lang=typescript
 *
 * [205] Isomorphic Strings
 */

// @lc code=start
function isIsomorphic(s: string, t: string): boolean {
  // 映射关系，用map结构
  // 遍历s，我们查看s的每个字母是否能够在map上有映射，该映射是否是t当中当前同位置的字母。是的话继续遍历。
  // 否则我们看map上是不是没有，没有就加入，继续遍历。否则说明是映射不对，直接返回false。
  // 我们最终会使用两根map，一个用来看s-> t的映射，一个用来看t-> s的映射

  const sMap = new Map<string, string>();
  const tMap = new Map<string, string>();

  for (let i = 0; i < s.length; i++) {
    const sChar = s[i];
    const tChar = t[i];

    const sMapChar = sMap.get(sChar);
    const tMapChar = tMap.get(tChar);

    if ((sMapChar && sMapChar !== tChar) || (tMapChar && tMapChar !== sChar)) {
      return false;
    }

    sMap.set(sChar, tChar);
    tMap.set(tChar, sChar);
  }

  return true;
};
// @lc code=end

export const isomorphic_strings = isIsomorphic;
