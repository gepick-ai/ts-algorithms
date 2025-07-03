/*
 * @lc app=leetcode id=560 lang=typescript
 *
 * [560] Subarray Sum Equals K
 */

// @lc code=start
// 方案1: 枚举起点，不断往所有可能的终点累加 0->1->2->3
// 方案2: 枚举终点，不断往所有可能的起点累加 0<-1<-2<-3
// function subarraySum(nums: number[], k: number): number {
//     let ans = 0;
//     // 考虑以 i 为结尾，和为 k 的连续子数组个数，我们需要统计符合条件的下标 j 的个数，其中 0≤j≤i 且 [j..i] 这个子数组的和恰好为 k
//     // 不断枚举终点i
//     for (let i = 0; i < nums.length; i++) {
//         let pre = 0;
//         // 从终点开始不断枚举起点，在这个过程不断累加num，在累加的过程当中判断k，找符合条件的起点j，则[j,i]就是满足条件的子数组
//         // TODO: 这一步是可以优化的，每次都枚举起点，不断累加。
//         for (let j = i; j >= 0; j--) {
//             pre+=nums[j];

//             if(pre===k) {
//                 ans++
//             }
//         }
//     }

//     return ans;
// }

function subarraySum(nums: number[], k: number): number {
  let ans = 0;
  let pre = 0;
  const map = new Map<number, number>(); // 存储前缀和及其个数
  map.set(0, 1);

  // 枚举终点j
  for (let j = 0; j < nums.length; j++) {
    // 表示[0,j]的前缀和
    pre += nums[j];
    // 表示j之前某个位置为结尾的前缀和
    const pre1 = pre - k;
    // 如果map中存在j左边某个位置的前缀和，说明存在某个位置[i,j]的前缀和 = k的情况
    // 比如pre - pre1 = k（前缀和之差等于一段连续子数组的和），可能是[i,j],或者[i-1,j]..[0, j]等等连续子数组的和 = k。因为可能有多个，所以我们需要map一次记录多个而不是直接加1
    // 对于我们不需要知道具体的位置i在j左侧的什么位置，只需要知道存在过，那么就说明存在一个子数组和为k。
    const count = map.get(pre1);

    ans += count ?? 0;

    map.set(pre, (map.get(pre) ?? 0) + 1);
  }

  return ans;
}

// function subarraySum(nums: number[], k: number): number {
//   let ans = 0;
//   const prefix = new Array(nums.length + 1).fill(0);

//   for (let i = 0; i < nums.length; i++) {
//     prefix[i + 1] = prefix[i] + nums[i];
//   }

//   const map = new Map<number, number>();

//   for (const pre of prefix) {
//     const x = pre - k;
//     // 尝试看当前位置的pre左边是否存在某个位置的前缀和等于x。这样一来能够使得pre - x = k，即[i,j]的和为k。
//     // 对于每个pre，它对应的x可能是不一样的。我们就是找当前pre对应的x是否存在过。
//     //
//     // NOTE: 为什么不会重复？
//     // 关键点：每次 ans += map.get(x)! 都是在计算以当前位置为终点的子数组！
//     // 位置2：找到子数组 [1,2,3]，以位置2为终点
//     // 位置3：找到子数组 [1,2,3,0]，以位置3为终点
//     // 以当前位置为终点看，假如x重复出现，但是由于终点不同，就算是prefix[i] = x相同，这也是两个完全不同的子数组，所以都应该被计数。
//     // 因为终点不同。就算是prefix在map中存在，但是终点不同最终最终形成的子数组也是不一样的。map只是说明前边prefix满足了等于当前prefix-k，但只要终点和起点具有变化其实都是对应不同的子数组
//     // Map的作用：记录历史上每个前缀和出现的次数（可能的起点）
//     if (map.has(x)) {
//       ans += map.get(x)!;
//     }

//     map.set(pre, (map.get(pre) ?? 0) + 1);
//   }

//   return ans;
// }

// function subarraySum(nums: number[], k: number): number {
//     // 如果nums[i] 到 nums[j-1]的元素和 = k，转化成前缀和表示就是：
//     // prefix[j] - prefix[i] = k; 推出 prefix[j] - k  = prefix[i];
//     // 所以我们需要在prefix中针对每个位置j，查看是否之前存在过位置i，使得目前位置的prefix[j] - k能够等于prefix[i]
//     const prefix = new PrefixSum(nums).prefix;

//     const map = new Map<number, number>();
//     let size = 0;

//     for (let i = 0; i < prefix.length; i++) {
//         const target = prefix[i] - k;  // 我们要找的前缀和
//         if (map.has(target)) {
//             size += map.get(target);
//         }

//         map.set(prefix[i], (map.get(prefix[i]) ?? 0) + 1)
//     }

//     return size;
// };

// class PrefixSum {
//     // prefix[i]表示前i个数字的和
//     prefix: number[];

//     constructor(nums: number[]) {
//         this.prefix = new Array(nums.length + 1).fill(0);

//         // 枚举前缀的结束位置，计算前i个数字的前缀和
//         for (let i = 0; i < nums.length; i++) {
//             this.prefix[i + 1] = this.prefix[i] + nums[i];
//         }
//     }

//     // 获取区间[left,right]的和
//     sumRange(nums: number, left: number, right: number): number {
//         // prefix[right+1]表示 [0,right]的前缀和 = nums[0] + nums[1] + ...+ nums[left-1] + nums[left]+ ...+ nums[right]
//         // prefix[left]表示[0,left-1]的前缀和    = nums[0] + nums[1] + ...+ nums[left-1]
//         //  上述做差 就是nums[left] + ... + nums[right]即区间[left,right]的和

//         return this.prefix[right + 1] - this.prefix[left];
//     }
// }
// @lc code=end

/**
 * {@include ../../../../../../.typedoc/problems/560.和为K的子数组.md}
 *
 * 
 *
 * @description
 * 前缀和s[i] = nums[0] + nums[1] + ... + nums[i-1]，表示下标[0,i-1]前缀的和。
 *
 * @group 数组
 */
export const subarray_sum_equals_k = subarraySum;
