/*
 * @lc app=leetcode id=155 lang=typescript
 *
 * [155] Min Stack
 */

// @lc code=start
class MinStack {
  private minHeap = new MinHeap();
  private stack: number[] = [];

  push(val: number): void {
    this.minHeap.add(val);
    this.stack.push(val);
  }

  pop(): void {
    const num = this.stack.pop()!;
    this.minHeap.del(num);
  }

  top(): number {
    return this.stack[this.stack.length - 1];
  }

  getMin(): number {
    return this.minHeap.getMin();
  }
}

class MinHeap {
  els: number[] = [];

  getParentIndex(index: number): number {
    return Math.floor((index - 1) / 2);
  }

  getLeftIndex(index: number): number {
    return 2 * index + 1;
  }

  getRightIndex(index: number): number {
    return 2 * index + 2;
  }

  swap(i: number, j: number): void {
    [this.els[i], this.els[j]] = [this.els[j], this.els[i]];
  }

  swim(index: number) {
    while (index > 0 && this.els[this.getParentIndex(index)] > this.els[index]) {
      this.swap(this.getParentIndex(index), index);
      index = this.getParentIndex(index);
    }
  }

  sink(index: number) {
    while (true) {
      let leftIndex = this.getLeftIndex(index);

      if (leftIndex > this.els.length - 1) {
        break;
      }

      let minIndex = leftIndex;

      if (this.getRightIndex(index) < this.els.length && this.els[this.getRightIndex(index)] < this.els[minIndex]) {
        minIndex = this.getRightIndex(index);
      }

      if (this.els[minIndex] > this.els[index]) {
        break;
      }

      this.swap(index, minIndex);

      index = minIndex;
    }
  }

  add(v: number) {
    this.els.push(v);

    this.swim(this.els.length - 1);
  }

  getMin() {
    return this.els[0];
  }

  extractMin() {
    const min = this.els[0];

    this.swap(0, this.els.length - 1);
    this.els.pop();

    this.sink(0);

    return min;
  }

  isEmpty() {
    return this.els.length === 0;
  }

  del(v: number) {
    const index = this.els.findIndex(n => v === n);

    this.swap(index, this.els.length - 1);
    this.els.pop();
    this.sink(index);
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
// @lc code=end

/**
 * @category 栈
 */
export const min_stack = MinStack;
