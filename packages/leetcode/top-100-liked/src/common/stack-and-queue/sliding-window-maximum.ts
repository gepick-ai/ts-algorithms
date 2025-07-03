/*
 * @lc app=leetcode id=239 lang=typescript
 *
 * [239] Sliding Window Maximum
 */

// @lc code=start
function maxSlidingWindow(nums: number[], k: number): number[] {
  const ans: number[] = [];
  const q: number[] = []; // 存储索引，索引对应的值从大到小排列，单调递减队列

  for (let i = 0; i < nums.length; i++) {
    // 入: 为了维护单调递减队列，如果当前元素大于队尾元素，则队尾元素出队。队列中存着的是可能成为窗口最大值的元素的索引。
    while (q.length > 0 && nums[i] >= nums[q[q.length - 1]]) {
      q.pop();
    }
    q.push(i);

    // 出：移除单调队列中那个已经离开滑动窗口的元素。
    if (q[0] < i - k + 1) { // i - k + 1 是当前窗口的左边界。如何表示队头已经离开窗口？那就是队头索引小于等于i - k + 1，说明该索引已经离开窗口了。
      q.shift();
    }

    // 记
    if (i >= k - 1) { // 窗口已经形成，此时i继续前进，窗口就继续前进
      ans.push(nums[q[0]]);
    }
  }

  return ans;
};
// @lc code=end

/**
 * {@include ../../../../../../.typedoc/leetcode/239.滑动窗口最大值/problem.md}
 *
 *
 *
 * @description
 *
 * @group 栈和队列
 */
export const sliding_window_maximum = maxSlidingWindow;
