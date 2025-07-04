/*
 * @lc app=leetcode id=739 lang=typescript
 *
 * [739] Daily Temperatures
 */

// @lc code=start

// #region code
function dailyTemperatures(temperatures: number[]): number[] {
  // 由于需要求相对间隔天数，我们在s中存放下标而不是存放具体元素。具体元素可以通过temperatures[i]得到
  const n = temperatures.length;
  const s: number[] = []; // 我们让栈从栈底到栈顶维持单调递增
  const ans: number[] = new Array(n).fill(0); // 按照题意创建n个位置，每个位置默认0，代表如果右边没有比当前位置更大的第一个数。

  // 从左往右，逐步查看每个数
  for (let i = 0; i < n; i++) {
    // 如果栈空，我们放入当前数
    if (s.length === 0) {
      s.push(i);
    }
    else {
      // 否则栈不为空，如果我们要放入当前数，那么为了维持单调递减，我们需要不断查看栈顶元素：
      // 栈顶元素如果总是比当前数小，那么就出栈
      // 最后我们放入当前数，这样一来栈维持单调递减。
      // 由于栈里总是保持着没找到右边第一个比自己大的数，那么当我们能够出栈就代表我们看到了比栈顶数更大的第一个数了。于是我们记录结果
      while (temperatures[s[s.length - 1]] < temperatures[i]) {
        const j = s.pop()!;
        ans[j] = i - j;
      }

      s.push(i);
    }
  }

  return ans;
};
// #endregion code
// @lc code=end

/**
 * {@include ../../../../../../.typedoc/leetcode/739.每日温度/problem.md}
 *
 *
 *
 * @description
 * {@include ../../../../../../.typedoc/leetcode/739.每日温度/description.md}
 * {@includeCode ./daily-temperatures.ts/#code}
 *
 * @group 栈和队列
 * @summary {@include ../../../../../../.typedoc/leetcode/739.每日温度/summary.md}
 */
export const daily_temperatures = dailyTemperatures;
