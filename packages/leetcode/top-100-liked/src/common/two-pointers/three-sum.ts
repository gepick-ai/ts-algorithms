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

  const n = nums.length;
  const ans: number[][] = [];

  // i只能到n-3，因为假如有新三元组的话，要留n-2、n-1凑新的三元组。
  for (let i = 0; i < n - 2; i++) {
    // 重复枚举的数所对应的三元组是一样的，去重跳过
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue;
    }

    // 转换为有序递增数组上的两数之和
    let target = 0 - nums[i];
    let l = i + 1;
    let r = n - 1;

    while (l < r) {
      const sum = nums[l] + nums[r];
      if (sum < target) { // 找的数比target小了，l++
        l++;
      }
      else if (sum > target) { // 找的数比target大了，r--
        r--;
      }
      else {
        ans.push([nums[i], nums[l], nums[r]]);

        // 找到符合条件的l了，要去重，不要重复选一样的
        l++;
        while (l < r && nums[l] === nums[l - 1]) {
          l++;
        }

        // 找到符合条件的r了，要去重，不要重复选一样的
        r--;
        while (l < r && nums[r] === nums[r + 1]) {
          r--;
        }
      }
    }
  }

  return ans;
};
// #endregion code
// @lc code=end

/**
 * {@include ../../../../../../.typedoc/problems/15.三数之和.md}
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
 * @summary #### 15.三数之和 ✅
 *
 * 排序 + 转换成两数之和 + 去重
 */
export const three_sum = threeSum;
