/*
 * @lc app=leetcode id=56 lang=typescript
 *
 * [56] Merge Intervals
 */

// @lc code=start

function merge(intervals: number[][]): number[][] {
  // 1---3
  // 1-----5
  // 1--2
  //  2--3

  // 先对区间进行排序，按照第一个元素大小情况进行升序
  intervals = intervals.sort((a, b) => a[0] - b[0]);

  // 接下来依次取两个区间段a1和a2来查看：
  // 由于我们通过区间排序尽量对齐了a1和a2两个区间段的左边部分
  // 所以a2的左边一定是大于等于a1的左边的。
  // 因此新区间的左边可以大胆设置为a1的左边。
  // 至于新区间的右边还需要分情况讨论：
  // 1. 如果说a2的左边都跑出了a1的右边了，那么新区间的右边就是a1的右边
  // 2. 如果说a2的左边没跑出a1的右边，那么新区间的右边就是a2的右边。即两个区间做了一次合并。
  // 当完成一次合并后，我们继续往后看下一个区间，再次判断它与新区间的关系。不断重复这个过程，直到看完所有区间为止。

  // 按照上述思路整理出总方案：[[1,3],[2,6],[8,10],[15,18]]
  // 设计指针loc = 0 从数组左边开始跑
  // 每次设置一个新的区间newInternal = nums[loc]，默认为当前查看区间；
  // loc不断往右跑，每跑一步尝试查看下一个区间是否能与newInternal合并，能合并的话更新新区间的尾部Math.max(a1.end, a2.end);
  // 不能合并的话，结算区间，加入答案中。

  // 比如[[1,3],[2,6],[8,10],[15,18]]
  // loc = 1
  // newInternal = [1,3]
  // ans = []

  // loc = 0 < 3， newInternal 和 loc[0+1] = [2,6] 能合并， newInternal = [1,6]。 loc++;
  // loc = 1 < 3,  newInternal = [1,6] 和 loc[1+1] =  [8,10]无法合并，结算: ans= [[1,6]]，newInternal = [8,10], loc++
  // loc = 2 < 3, newInternal = [8,10] 和 loc[2+1] = [15,18]无法合并，结算：ans = [[1,6], [8,10]]， newInternal = [15,18], loc++
  // loc = 3 < nums.length，跳出。

  let loc = 0;
  let newInternal = intervals[0];
  const ans: number[][] = [];

  while (loc < intervals.length - 1) {
    loc++;
    const nextInternal = intervals[loc];
    if (newInternal[1] < nextInternal[0]) {
      ans.push(newInternal);
      newInternal = nextInternal;
    }
    else {
      if (nextInternal[1] > newInternal[1]) {
        newInternal[1] = nextInternal[1];
      }
    }
  }

  ans.push(newInternal);

  return ans;
}

// @lc code=end

/**
 * {@include ../../../../../../.typedoc/problems/56.合并区间.md}
 *
 * @group 数组
 */
export const merge_intervals = merge;
