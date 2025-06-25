/*
 * @lc app=leetcode id=739 lang=typescript
 *
 * [739] Daily Temperatures
 */

// @lc code=start
function dailyTemperatures(temperatures: number[]): number[] {
  // 由于需要求相对间隔天数，我们在stack中存放下标而不是存放具体元素。具体元素可以通过temperatures[i]得到
  const stack: number[] = [0];
  const result: number[] = new Array(temperatures.length).fill(0);

  for (let i = 1; i < temperatures.length; i++) {
    // 只要栈顶坐标所对应元素值比当前元素值小，说明找到了第一个比栈顶元素大的温度，结算一次。
    // 结算完成该元素就没有存在的必要，出栈。
    while (stack.length > 0 && temperatures[i] > temperatures[stack[stack.length - 1]]) {
      const index = stack[stack.length - 1];
      result[index] = i - index;
      stack.pop();
    }

    stack.push(i);
  }

  return result;
};
// @lc code=end

/**
 * 知识点1:单调栈应用
 * 要寻找右边第一个比当前温度更高的温度，维持一个递增的单调栈。
 * 1.当遍历到的元素大于当前元素：循环查看栈顶元素，结算，完成后弹出栈顶元素
 * 2.当遍历到的元素小于等于当前元素：元素入栈
 * 直到遍历完所有温度后停止操作
 *
 * @group 栈与队列
 * @category 单调栈
 */
export const daily_temperatures = dailyTemperatures;
