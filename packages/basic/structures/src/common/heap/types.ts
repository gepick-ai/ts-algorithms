export interface IHeap<T> {
  insert(e: T): void;
  extract(): T;
  swim(index: number): void;
  sink(index: number): void;
}

export interface IHeap1<E> {
  /** 返回堆中的元素个数 */
  size: () => number;
  /** 返回堆是否为空 */
  isEmpty: () => boolean;
  /** 向堆中添加元素 */
  add: (e: E) => void;
  /** 看堆中的最大元素 */
  findMax: () => E;
  /** 取出堆中的最大元素 */
  extractMax: () => E;
}

/**
 * 二叉堆本质上是一种完全二叉树，分为两种：最大堆和最小堆。
 *
 * 而一棵完全二叉树可以使用数组来表示，因为我们忽略数组第一个元素不用，具体规律如下：
 *
 * 1. 索引为 i 的左孩子的索引是 2 * i
 * 2. 索引为 i 的右孩子的索引是 2 * i + 1
 * 3. 索引为 i 的父节点的索引是 Math.floor(i / 2)
 *
 */
