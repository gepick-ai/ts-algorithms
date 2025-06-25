/*
 * @lc app=leetcode id=560 lang=typescript
 *
 * [560] Subarray Sum Equals K
 */

// @lc code=start
function subarraySum(nums: number[], k: number): number {
  // 如果nums[i] 到 nums[j-1]的元素和 = k，转化成前缀和表示就是：
  // prefix[j] - prefix[i] = k; 推出 prefix[j] - k  = prefix[i];
  // 所以我们需要在prefix中针对每个位置j，查看是否之前存在过位置i，使得目前位置的prefix[j] - k能够等于prefix[i]
  const prefix = new PrefixSum(nums).prefix;

  const map = new Map<number, number>();
  let size = 0;

  for (let i = 0; i < prefix.length; i++) {
    const target = prefix[i] - k; // 我们要找的前缀和
    if (map.has(target)) {
      size += map.get(target)!;
    }

    map.set(prefix[i], (map.get(prefix[i]) ?? 0) + 1);
  }

  return size;
};

class PrefixSum {
  // prefix[i]表示前i个数字的和
  prefix: number[];

  constructor(nums: number[]) {
    this.prefix = new Array(nums.length + 1).fill(0);

    // 枚举前缀的结束位置，计算前i个数字的前缀和
    for (let i = 0; i < nums.length; i++) {
      this.prefix[i + 1] = this.prefix[i] + nums[i];
    }
  }

  // 获取区间[left,right]的和
  sumRange(nums: number, left: number, right: number): number {
    // prefix[right+1]表示 [0,right]的前缀和 = nums[0] + nums[1] + ...+ nums[left-1] + nums[left]+ ...+ nums[right]
    // prefix[left]表示[0,left-1]的前缀和    = nums[0] + nums[1] + ...+ nums[left-1]
    //  上述做差 就是nums[left] + ... + nums[right]即区间[left,right]的和

    return this.prefix[right + 1] - this.prefix[left];
  }
}
// @lc code=end

/**
 * @group 数组
 * @category 前缀和
 * @document ../../../../../../.typedoc/docs/560.和为K的子数组.md
 * @description
 * 前缀和s[i] = nums[0] + nums[1] + ... + nums[i-1]，表示下标[0,i-1]前缀的和。
 */
export const subarray_sum_equals_k = subarraySum;
