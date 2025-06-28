/*
 * @lc app=leetcode.cn id=1 lang=typescript
 *
 * [1] 两数之和
 */

// @lc code=start
// #region code
function twoSum(nums: number[], target: number): number[] {
  const map = new Map<number, number>();
  let ans: number[] = [];

  // 这个解法的思路就是尝试找差值，如果有nums的元素是差值，最多遍历完最后一次一定能找到，题目说了一定有一个答案
  // 查看当前位置左边是不是有数是我们要找的差值。
  for (let i = 0; i < nums.length; i++) {
    const x = target - nums[i]; // 获取当前数的差值
    const loc = map.get(x); // 获取差值的位置

    // 如果差值在map中存在，说明找到了
    // NOTE: JS有隐式类型转换，所以0和false都会被认为是false，所以需要使用 !== undefined 来判断
    if (loc !== undefined) {
      ans = [loc, i];
    }

    // 否则将当前数存入map
    map.set(nums[i], i);
  }

  return ans;
};
// #endregion code

// function twoSum(nums: number[], target: number): number[] {
//   let ans:number[] = []

//   for(let i = 0; i < nums.length; i++) {
//       const x = target - nums[i]
//       for(let j = i + 1; j <nums.length; j++) {
//           if(nums[j] === x) {
//               ans = [i,j]
//           }
//       }
//   }

//   return ans;
// }
// @lc code=end

/**
 * @group 哈希表
 * @document ../../../../../../.typedoc/docs/1.两数之和.md
 *
 * @category 哈希表
 *
 * @description
 * 实际上用map是暴力解法的空间换时间优化。
 *
 * 本质是补数查找，对于每个位置i，我们想知道："x (target - nums[i]) 这个数在之前的位置出现过吗？"。
 * 如果出现过，那么就找到答案了。否则说明在之前的位置没出现过，就把当前数字记住，供后续位置使用。
 * - 暴力解法是，先枚举nums[i]，再看i位置右边是否存在target-nums[i]。
 * - 优化解法是，先看在i位置左边是否存在target-nums[i]。跟暴力解法操作相反。
 *   - 0，左边是空，不存在target-nums[0]
 *   - 1，左边是0，如果0位置的数字是target-nums[1]，那么就找到答案了。
 *   - 2，左边是0和1，如果0和1位置的数字是target-nums[2]，那么就找到答案了。
 *   - 3，左边是0、1和2，如果0、1和2位置的数字是target-nums[3]，那么就找到答案了。
 *   - 4，左边是0、1、2和3，如果0、1、2和3位置的数字是target-nums[4]，那么就找到答案了。
 *   - 5，左边是0、1、2、3和4，如果0、1、2、3和4位置的数字是target-nums[5]，那么就找到答案了。
 *   - 6，左边是0、1、2、3、4和5，如果0、1、2、3、4和5位置的数字是target-nums[6]，那么就找到答案了。
 * 所以优化解法相当于不断给后边的数提供候选的差值，只不过是它们放到了map里，而不是在遍历的时候直接查找。先把target-nums[i]放到map里，而暴力解法是先枚举i，然后再去找target-nums[i]。
 *
 * {@includeCode ./two-sum.ts/#code}
 */
export const two_sum = twoSum;
