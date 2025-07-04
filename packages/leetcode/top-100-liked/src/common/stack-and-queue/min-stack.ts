/*
 * @lc app=leetcode id=155 lang=typescript
 *
 * [155] Min Stack
 */

// @lc code=start

// #region code
class MinStack {
  private minSt: number[] = [];
  private st: number[] = [];

  push(val: number): void {
    const minSt = this.minSt;
    this.st.push(val);

    if (minSt.length === 0 || minSt[minSt.length - 1] >= val) {
      minSt.push(val);
    }
  }

  pop(): void {
    const minSt = this.minSt;
    const top = this.st.pop()!;

    if (top === minSt[minSt.length - 1]) {
      minSt.pop();
    }
  }

  top(): number {
    return this.st[this.st.length - 1]!;
  }

  getMin(): number {
    return this.minSt[this.minSt.length - 1]!;
  }
}

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
// #endregion code

// @lc code=end

/**
 * {@include ../../../../../../.typedoc/leetcode/155.最小栈/problem.md}
 *
 * @description
 * {@include ../../../../../../.typedoc/leetcode/155.最小栈/description.md}
 * {@includeCode ./min-stack.ts#code}
 *
 * @summary
 * {@include ../../../../../../.typedoc/leetcode/155.最小栈/summary.md}
 *
 * @group 栈和队列
 */
export const min_stack = MinStack;
