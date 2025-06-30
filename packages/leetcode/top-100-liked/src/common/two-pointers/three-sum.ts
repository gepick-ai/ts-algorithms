/*
 * @lc app=leetcode id=15 lang=typescript
 *
 * [15] 3Sum
 */

// @lc code=start
// #region code
function threeSum(nums: number[]): number[][] {
  // 要找出所有和为0且不能重复的三元组。
  // [-4,-1,-1,0,1,2]中可以选[-1,-1,2]，[-1,0,1]

  nums.sort((a, b) => a - b);

  const ans: number[][] = [];
  let i = 0;

  while (i < nums.length - 2) {
    const target = 0 - nums[i]; // 这就是在剩下的子数组里找两数之和
    let left = i + 1;
    let right = nums.length - 1;

    // 这个位置循环不变的条件不能是left!==right，因为可能在内部循环去重的过程，就导致了left跳过了right
    while (left < right) {
      const sum = nums[left] + nums[right];

      if (sum > target) {
        right--;
      }
      else if (sum < target) {
        left++;
      }
      else {
        // 说明满足条件，找到一个解
        ans.push([nums[i], nums[left], nums[right]]);

        left++;
        right--;

        // 跳过重复的，对于left和right来说，如果重复，那么就跳过，因为已经找到一个解了
        while (nums[left] === nums[left - 1]) {
          left++;
        }
        while (nums[right] === nums[right + 1]) {
          right--;
        }
      }
    }

    i++;

    // 跳过重复的，不需要重复寻找同一个相反数
    while (nums[i] === nums[i - 1]) {
      i++;
    }
  }

  return ans;
};
// #endregion code
// @lc code=end

/**
 * {@include ../../../../../../.typedoc/problems/15.三数之和.md}
 *
 *
 * @category 双指针
 * @summary 排序 + 转换成两数之和 + 去重
 *
 * @description
 * - 先排序
 * - 三数之和其实就是找相反数，这样一来就是变成了排序的数组中找两数之和的题目。
 * - 由于可能会有重复的数，所以需要跳过重复的数。
 * - 这里去重的操作关键是：要先移动，拿移动后的来判断。而不是先拿+1或者-1通过计算来判断然后才+1或者-1，因为就算你判断重复了，继续移动还是来到你计算的重复的那个数。并没有真正意义做到去重
 * 所以碰到数要去重，一定要先执行移动操作，然后拿它跟移动前的比较。然后不断判断，知道这个数不再跟移动前的数重复为止，这个数就是新数。
 *
 * {@includeCode ./three-sum.ts/#code}
 *
 * @group 双指针
 */
export const three_sum = threeSum;
