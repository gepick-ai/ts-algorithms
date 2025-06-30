/*
 * @lc app=leetcode id=215 lang=typescript
 *
 * [215] Kth Largest Element in an Array
 */

// @lc code=start
function findKthLargest(nums: number[], k: number): number {
  const minHeap = new MinHeap(k);

  for (let i = 0; i < nums.length; i++) {
    if (minHeap.isFull() && minHeap.getMin() < nums[i]) {
      minHeap.deleteMin();
    }

    minHeap.add(nums[i]);
  }

  return minHeap.getMin()!;
};

class MinHeap {
  private els: number[] = [];

  constructor(private capacity: number) { }

  isEmpty() {
    return this.els.length === 0;
  }

  isFull() {
    return this.els.length === this.capacity;
  }

  add(v: number) {
    if (this.isFull()) {
      return;
    }

    this.els.push(v);
    this.swim(this.els.length - 1);
  }

  getMin() {
    return this.els[0];
  }

  deleteMin() {
    if (this.isEmpty()) {
      return;
    }

    const min = this.els[0];

    this.swap(0, this.els.length - 1);
    this.els.pop();
    this.sink(0);

    return min;
  }

  /**
     * 如果父节点的值大于子节点的值，那么就交换父子节点的位置
     * @param index 从哪里开始上浮
     */
  swim(index: number): void {
    while (this.els[this.getParentIndex(index)] > this.els[index]) {
      this.swap(this.getParentIndex(index), index);
      index = this.getParentIndex(index);
    }
  }

  /**
     * - 如果父节点是叶子节点：啥都不做。
     * - 如果父节点不是叶子节点：
     *   那就一定至少有一个左节点，那可能有一个右节点。那么我们的策略就是父比两个子的最小还要大，交换它们。直到不满足此条件位置
     *
     * @param index 从哪里开始下沉
     */
  sink(index: number): void {
    while (true) {
      const leftIndex = this.getLeftIndex(index);

      if (leftIndex > this.els.length - 1) {
        // 说明是叶子节点
        break;
      }

      let minIndex = leftIndex; // 先假设最小的
      const rightIndex = this.getRightIndex(index);

      if (rightIndex < this.els.length && this.els[rightIndex] < this.els[leftIndex]) {
        minIndex = rightIndex;
      }

      if (this.els[index] < this.els[minIndex]) {
        break;
      }

      this.swap(minIndex, index);

      index = minIndex;
    }
  }

  protected getParentIndex(childIndex: number): number {
    return Math.floor((childIndex - 1) / 2);
  }

  protected getLeftIndex(parentIndex: number): number {
    return 2 * parentIndex + 1;
  }

  protected getRightIndex(parentIndex: number): number {
    return 2 * parentIndex + 2;
  }

  protected swap(i: number, j: number): void {
    [this.els[i], this.els[j]] = [this.els[j], this.els[i]];
  }
}
// @lc code=end

/**
 * {@include ../../../../../../.typedoc/problems/215.数组中的第K个最大元素.md}
 *
 * @category 堆
 *
 * @description
 * 要找第K大元素，我们可以维护一个具有K个元素的小根堆。
 * 这样子按照小根堆定义，即堆顶元素为堆中最小元素。
 * 我们不断往堆中插入元素，当堆中元素满了，我们判断假如的元素是否比堆顶元素要大。如果是就删除堆顶元素。然后将大数加入堆顶。
 * 由于堆的特性，每次都会heapify，所以堆顶会不断放置新的最小元素。当所有元素放完了，在堆内部调整下，重新推到堆顶的元素就是第K大元素。
 * 换句话说，小根堆不允许存在比堆顶小的元素，只要大就会往下沉。一轮下来，小的都被踢出去了，最后留下的堆顶第K个元素就是第K大元素。
 *
 * @group 栈与队列
 */
export const kth_largest_element_in_an_array = findKthLargest;
