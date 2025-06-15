/*
 * @lc app=leetcode id=39 lang=typescript
 *
 * [39] Combination Sum
 */

// @lc code=start
function combinationSum(candidates: number[], target: number): number[][] {
  const ans: number[] = [];
  const result: number[][] = [];

  _combination(candidates, target, 0, 0, ans, result);

  return result;
};

function _combination(candidates: number[], target: number, sum: number, start: number, ans: number[], result: number[][]): void {
  if (sum === target) {
    result.push([...ans]);
    ans = [];

    return;
  }

  if (sum > target) {
    return;
  }

  if (start > candidates.length - 1) {
    return;
  }

  // 比如[2,3,6,7]
  // start = 0; 说明递归每层都可以从0开始选取
  // start = 1；说明递归每层都可以从1开始选取
  // 为啥这么取，比如2,2,3是一个结果，那么来到3开始选取，如果也能选2，就又回到3，2，2了，也就是2，2，3了。所以必须从位1开始选。
  for (let i = start; i < candidates.length; i++) {
    if (i < start) {
      continue;
    }

    const num = candidates[i];
    ans.push(num);
    _combination(candidates, target, sum + num, start, ans, result);
    ans.pop();
    start++;
  }
}

// @lc code=end

export const combination_sum = combinationSum;
