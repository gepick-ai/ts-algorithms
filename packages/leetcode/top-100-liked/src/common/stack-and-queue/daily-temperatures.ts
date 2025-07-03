/*
 * @lc app=leetcode id=739 lang=typescript
 *
 * [739] Daily Temperatures
 */

// @lc code=start

// #region code
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
// #endregion code
// @lc code=end

/**
 * {@include ../../../../../../.typedoc/leetcode/739.每日温度/problem.md}
 *
 *
 *
 * @description
 * {@include ../../../../../../.typedoc/notes/739.每日温度.md}
 * {@includeCode ./daily-temperatures.ts/#code}
 *
 * @group 栈和队列
 * @summary {@include ../../../../../../.typedoc/leetcode/739.每日温度/summary.md}
 */
export const daily_temperatures = dailyTemperatures;
