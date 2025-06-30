/*
 * @lc app=leetcode id=42 lang=typescript
 *
 * [42] Trapping Rain Water
 */

// @lc code=start
function trap(height: number[]): number {
  let result = 0;
  const stack: number[] = [0];

  for (let i = 1; i < height.length; i++) {
    while (stack.length > 0 && height[i] > height[stack[stack.length - 1]]) {
      const top = stack.pop()!;

      if (stack.length === 0) {
        break;
      }

      const left = stack[stack.length - 1];
      const h = Math.min(height[i], height[left]) - height[top];
      const w = i - left - 1;

      result += h * w;
    }

    stack.push(i);
  }

  return result;
};
// @lc code=end

/**
 * {@include ../../../../../../.typedoc/problems/42.接雨水.md}
 *
 * @category 单调栈
 *
 * @description
 * 单调栈，找到每一个柱子左右两边第一个比它高的柱子，然后计算这个柱子能接多少雨水。
 * 如果你找到比当前栈顶要大的元素，那么你只要尝试查看栈顶前面是否还有元素，有这个元素就是左边第一个比他大的元素。
 * 这样子就能够拿到当前柱子左右两边第一个比它高的柱子。结算答案即可。
 * 不断维持单调栈，直到答案找完为止。
 *
 * 用单调栈解决，其实是一行一行寻找雨水。横向查找雨水。每次接完雨水，可以看成填充了柱子。
 *
 * @group 栈与队列
 */
export const trapping_rain_water = trap;
