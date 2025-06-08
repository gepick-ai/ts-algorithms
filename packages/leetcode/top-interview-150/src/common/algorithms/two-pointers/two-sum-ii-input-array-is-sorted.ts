/*
 * @lc app=leetcode id=167 lang=typescript
 *
 * [167] Two Sum II - Input Array Is Sorted
 */

// @lc code=start
function twoSum(numbers: number[], target: number): number[] {
  // 关键点1：排好序了，右边一定比左边大
  // 关键点2：一定有一个答案
  // 这样一来，设置两个指针left和right，分别放在开头和结尾
  // 如果和小，让left往右边跑，如果和大，让right往左边跑
  // 当left和right撞上的时候停止操作

  let ans: number[] = [];
  let left = 0;
  let right = numbers.length - 1;

  while (left !== right) {
    if (numbers[left] + numbers[right] === target) {
      ans.push(left + 1, right + 1);
      break;
    }

    // 说明太大了和，让它变小
    if (numbers[left] + numbers[right] > target) {
      right--;
    }
    else { // 否则说明和太小了，让它变大
      left++;
    }
  }

  return ans;
};
// @lc code=end

/**
 * 关键点1：排好序了，右边一定比左边大
 * 关键点2：一定有一个答案
 * 这样一来，设置两个指针left和right，分别放在开头和结尾
 * 如果和小，让left往右边跑，如果和大，让right往左边跑
 * 当left和right撞上的时候停止操作
 */
export const two_sum_ii_input_array_is_sorted = twoSum;
