import { swap } from "@gepick/core/common";
import { IHeap } from "./types";

export class Heap<T> implements IHeap<T> {
  private elements: T[] = [];

  // 插入元素
  insert(e: T): void {
    this.elements.push(e);
    this.swim(this.elements.length - 1);
  }

  // 取出元素
  extract(): T {
    const e = this.elements.shift()!;
    this.sink(0);

    return e;
  }

  // 上浮
  // 从index位置开始上浮
  swim(index: number): void {
    const parentIndex = this.getParentIndex(index);

    while (index > 0 && this.elements[index] > this.elements[parentIndex]) {
      swap(this.elements, index, parentIndex);
      index = parentIndex;
    }
  }

  // 下沉
  // 将指定位置的元素下沉到正确的位置，以维护最大堆的性质
  sink(index: number): void {
    while (true) {
      // 获取左右子节点的索引
      const leftIndex = this.getLeftChildIndex(index);
      const rightIndex = this.getRightChildIndex(index);

      // 如果没有左子节点，说明当前节点是叶子节点，不需要下沉
      if (leftIndex >= this.elements.length) {
        break;
      }

      // 找到左右子节点中的较大值
      let maxIndex = leftIndex;
      if (rightIndex < this.elements.length && this.elements[rightIndex] > this.elements[leftIndex]) {
        maxIndex = rightIndex;
      }

      // 如果当前节点大于等于子节点中的较大值，则停止下沉
      if (this.elements[index] >= this.elements[maxIndex]) {
        break;
      }

      // 交换当前节点与较大子节点
      swap(this.elements, index, maxIndex);
      // 继续下沉
      index = maxIndex;
    }
  }

  protected getParentIndex(childIndex: number): number {
    return Math.floor((childIndex - 1) / 2);
  }

  protected getLeftChildIndex(parentIndex: number): number {
    return 2 * parentIndex + 1;
  }

  protected getRightChildIndex(parentIndex: number): number {
    return 2 * parentIndex + 2;
  }
}
