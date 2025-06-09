/*
 * @lc app=leetcode id=290 lang=typescript
 *
 * [290] Word Pattern
 */

// @lc code=start
function wordPattern(pattern: string, s: string): boolean {
  const pMap = new Map<string, string>();
  const sMap = new Map<string, string>();

  const helpS = s.split(" ");

  if (pattern.length !== helpS.length) {
    return false;
  }

  for (let i = 0; i < pattern.length; i++) {
    const pEl = pattern[i];
    const sEl = helpS[i];

    const pMapEl = pMap.get(pEl);
    const sMapEl = sMap.get(sEl);

    if ((pMapEl && pMapEl !== sEl) || (sMapEl && sMapEl !== pEl)) {
      return false;
    }

    pMap.set(pEl, sEl);
    sMap.set(sEl, pEl);
  }

  return true;
};
// @lc code=end

export const word_pattern = wordPattern;
