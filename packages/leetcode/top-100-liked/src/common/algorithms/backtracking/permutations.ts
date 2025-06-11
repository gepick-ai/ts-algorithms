/*
 * @lc app=leetcode id=46 lang=typescript
 *
 * [46] Permutations
 */

// @lc code=start
function permute(nums: number[]): number[][] {
  // [1,2,3]
  // 根为空的一棵多叉树
  const result: number[][] = [];
  const ans: number[] = [];

  _permute(nums, 0, ans, result);

  return result;
};

function _permute(nums: number[], count: number, ans: number[], result: number[][]) {
  if (count === nums.length) {
    result.push([...ans]);
    return;
  }

  for (let i = 0; i < nums.length; i++) {
    if (ans.includes(nums[i])) {
      continue;
    }

    ans.push(nums[i]);
    count++;

    _permute(nums, count, ans, result);

    ans.pop();
    count--;
  }
}
// @lc code=end

export const permutations = permute;
