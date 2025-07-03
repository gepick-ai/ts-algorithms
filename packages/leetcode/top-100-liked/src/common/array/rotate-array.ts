/*
 * @lc app=leetcode id=189 lang=typescript
 *
 * [189] Rotate Array
 */

// @lc code=start
/**
 * Do not return anything, modify nums in-place instead.
 */
function rotate(nums: number[], k: number): void {
  // 数组长度比k小：
  // 假如长度为3，k为5
  // 位0，最多向右转maxX = nums.length - 0 - 1 = 0
  // 给定k，那么 :
  // k一定会转至少一轮让整个数组元素回到原来位置，比如这里0转3次回到原位，那么需要不断削减k直到小于nums.length
  // 位i，新位置应该是 while(k >= nums.length) { k-nums.length}

  while (k >= nums.length) {
    k = k - nums.length;
  }

  // k跟数组长度比较，数组长度比k大：

  // 假如长度为7
  // 位置6，转1到0，转2到1，转3到2
  // 位置5，转1到6，转2到0，转3到1
  // 位置4，转1到5，转2到6，转3到0
  // 向右边转动，看还能往右转多少到达数组右边，长度为7的情况下：
  // 位6，向右只能转0
  // 位5，向右只能转1
  // 位4，向右只能转2
  // 。。。
  // 位1，向右只能转5
  // 位0，向右只能转6
  // 长度为m, 位n，向右最多只能转 maxX =  m - n - 1;
  // 给定k，那么 :
  // 当k <= maxX，那么计算各元素的位置就是
  // 位i，最终的新位置是 newLoc = i + k;
  // 当 k > maxX，那么多出来的转动次数leftX = k - maxX
  // 那么相当于从头开始排新位置，则新的位置newLoc = leftX - 1;

  const map = new Map<number, number>();

  for (let i = 0; i < nums.length; i++) {
    const maxX = nums.length - i - 1;
    let newLoc = i;

    if (k <= maxX) {
      newLoc = i + k;
    }
    else {
      newLoc = k - maxX - 1;
    }

    map.set(newLoc, nums[i]);
  }

  for (const [loc, num] of map) {
    nums[loc] = num;
  }
};
// @lc code=end

/**
 * {@include ../../../../../../.typedoc/leetcode/189.轮转数组/problem.md}
 *
 * @description
 * 找轮转规律，看三个角色的关系：轮转次数k，数组长度nums.length，位置i剩余向右轮转次数maxX = nums.length - i - 1。
 * 先看k跟数组长度关系，k小于数组长度，那么k一定会转至少一轮让整个数组元素回到原来位置，比如这里0转3次回到原位，那么需要不断削减k直到小于nums.length
 * 削减完成后，再看k跟maxX关系，k小于maxX，那么计算各元素的位置就是
 * 位i，最终的新位置是 newLoc = i + k;
 * 当 k > maxX，那么多出来的转动次数leftX = k - maxX
 * 那么相当于从头开始排新位置，则新的位置newLoc = leftX - 1;
 * 最后记住新位置和数然后放到原数组上。
 *
 * @group 数组
 */
export const rotate_array = rotate;
