/*
 * @lc app=leetcode id=128 lang=typescript
 *
 * [128] Longest Consecutive Sequence
 */

// @lc code=start
function longestConsecutive(nums: number[]): number {
  const set = new Set<number>(nums);
  let max = 0;

  for (let num of set) {
    // 如果num-1在set中存在，说明当前这个num不是开头，我们只从开头开始计算
    if (set.has(num - 1)) {
      continue;
    }

    // 否则说明当前num是开头，我们不断尝试寻找+1的数，直到找不到为止
    let cur = num + 1;
    while (set.has(cur)) {
      cur++;
    }

    // 当找不到+1的数时，更新最大值，拿当前序列的长度，和max比较，取最大值
    max = Math.max(max, cur - num);
  }

  return max;
};
// @lc code=end

/**
 * @group 哈希表
 */
export const longest_consecutive_sequence = longestConsecutive;
