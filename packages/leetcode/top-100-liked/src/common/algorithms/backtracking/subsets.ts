/*
 * @lc app=leetcode id=78 lang=typescript
 *
 * [78] Subsets
 */

// @lc code=start
function subsets(nums: number[]): number[][] {
  const result: number[][] = [];
  const ans: number[] = [];
  const loc = 0;

  _subsets(nums, loc, ans, result);

  return result;
};

function _subsets(nums: number[], loc: number, ans: number[], result: number[][]) {
  if (loc <= nums.length) {
    result.push([...ans]);
  }else {
    return;
  }

  for (let i = loc; i < nums.length; i++) {
    ans.push(nums[i]);
    loc++;

    _subsets(nums, loc, ans, result);

    ans.pop();
  }
}
export { subsets };
