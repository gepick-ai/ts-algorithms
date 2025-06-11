/*
 * @lc app=leetcode.cn id=1 lang=typescript
 *
 * [1] 两数之和
 */

// @lc code=start
function twoSum(nums: number[], target: number): number[] {
  const map = new Map<number, number>();
  const ans: number[] = [];

  // 这个解法的思路就是尝试找差值，如果有nums的元素是差值，最多遍历完最后一次一定能找到，题目说了一定有一个答案
  for (let i = 0; i < nums.length; i++) {
    const diff = target - nums[i]; // 获取当前数的差值
    const diffLoc = map.get(diff); // 获取差值的位置

    // 如果差值在map中存在，说明找到了
    // NOTE: JS有隐式类型转换，所以0和false都会被认为是false，所以需要使用 !== undefined 来判断
    if (diffLoc !== undefined) {
      ans.push(diffLoc, i);
      break;
    }

    // 否则将当前数存入map
    map.set(nums[i], i);
  }

  return ans;
};
// @lc code=end
export const two_sum = twoSum;
