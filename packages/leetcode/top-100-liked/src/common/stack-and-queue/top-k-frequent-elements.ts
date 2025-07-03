/*
 * @lc app=leetcode id=347 lang=typescript
 *
 * [347] Top K Frequent Elements
 */

// @lc code=start
function topKFrequent(nums: number[], k: number): number[] {
  // map记录num和其出现次数
  // 然后建立小根堆，不断往堆里放直到k个，如果堆顶元素出现的次数比尝试挑战加入的元素出现的次数小，将堆顶元素踢出堆顶，加入新元素。

  const map = new Map<number, number>();
  const heap = new MinHeap(k);
  const cnodes: CNode[] = [];

  for (let i = 0; i < nums.length; i++) {
    const count = map.get(nums[i]) ?? 0;

    map.set(nums[i], count + 1);
  }

  for (const [key, count] of map) {
    cnodes.push(new CNode(key, count));
  }

  for (const node of cnodes) {
    if (heap.isFull()) {
      const min = heap.getMin();

      if (min.count < node.count) {
        heap.delMin();
      }
    }

    heap.add(node);
  }

  const ans: number[] = [];

  while (!heap.isEmpty()) {
    ans.push(heap.delMin().key);
  }

  return ans;
};

class CNode {
  constructor(
    public readonly key: number,
    public readonly count: number,
  ) { }
}

class MinHeap {
  els: CNode[] = [];

  constructor(public readonly capacity: number) { };

  isEmpty() {
    return this.els.length === 0;
  }

  isFull() {
    return this.els.length === this.capacity;
  }

  protected getParentIndex(index: number): number {
    return Math.floor((index - 1) / 2);
  }

  protected getLeftIndex(index: number): number {
    return 2 * index + 1;
  }

  protected getRightIndex(index: number): number {
    return 2 * index + 2;
  }

  protected swap(i: number, j: number): void {
    [this.els[i], this.els[j]] = [this.els[j], this.els[i]];
  }

  swim(index: number): void {
    while (index > 0 && this.lessThan(this.els[index], this.els[this.getParentIndex(index)])) {
      this.swap(this.getParentIndex(index), index);

      index = this.getParentIndex(index);
    }
  }

  sink(index: number): void {
    while (true) {
      let minIndex = this.getLeftIndex(index);

      // 当前节点是叶子节点没必要下沉
      if (minIndex > this.els.length - 1) {
        break;
      }
      // 右子节点存在且其值比左值小，更新最新索引minIndex
      if (this.getRightIndex(index) < this.els.length && this.lessThan(this.els[this.getRightIndex(index)], this.els[minIndex])) {
        minIndex = this.getRightIndex(index);
      }

      // 查看index跟孩子中最小的节点值比，如果你比它都小或者等于它，满足小根堆定义性质没必要继续了
      if (this.lessThanOrEqual(this.els[index], this.els[minIndex])) {
        break;
      }

      // 否则我们交换index和minIndex，让这部分满足堆性质
      this.swap(minIndex, index);
      // 更新index，为下一次下沉做准备
      index = minIndex;
    }
  }

  add(v: CNode): void {
    if (this.isFull()) {
      return;
    }
    this.els.push(v);
    // 从最后一个位置开始上浮
    this.swim(this.els.length - 1);
  }

  getMin(): CNode {
    return this.els[0];
  }

  delMin(): CNode {
    const min = this.els[0];
    this.swap(0, this.els.length - 1);
    this.els.pop();
    // 最小元素出去了，从0位开始下沉
    this.sink(0);

    return min;
  }

  lessThan(a: CNode, b: CNode): boolean {
    return a.count < b.count;
  }

  lessThanOrEqual(a: CNode, b: CNode): boolean {
    return this.lessThan(a, b) || a.count === b.count;
  }
}
// @lc code=end

/**
 * {@include ../../../../../../.typedoc/leetcode/347.前K个高频元素/problem.md}
 *
 *
 *
 * @description
 *
 * @group 栈和队列
 */
export const top_k_frequent_elements = topKFrequent;
