/*
 * @lc app=leetcode id=148 lang=typescript
 *
 * [148] Sort List
 */

import { ListNode } from "./types";

// @lc code=start
/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function sortList(head: ListNode | null): ListNode | null {
  const minHeap = new MinHeap();

  while (head) {
    const val = head.val;
    minHeap.add(val);
    head = head.next;
  }
  const dummy = new ListNode(-1);
  let tail = dummy;

  while (minHeap.hasNode()) {
    tail.next = new ListNode(minHeap.getMin());
    tail = tail.next;
  }

  return dummy.next;
};

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
    const temp = this.els[i];
    this.els[i] = this.els[j];
    this.els[j] = temp;
  }

  swim(index: number): void {
    while (this.els[this.getParentIndex(index)] > this.els[index]) {
      this.swap(index, this.getParentIndex(index));

      index = this.getParentIndex(index);
    }
  }

  sink(index: number): void {
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

      this.swap(minIndex, index);

      index = minIndex;
    }
  }

  add(node: number) {
    this.els.push(node);

    this.swim(this.els.length - 1);
  }

  hasNode() {
    return this.els.length > 0;
  }

  getMin(): number {
    const min = this.els[0];

    this.swap(0, this.els.length - 1);
    this.els.pop();

    this.sink(0);

    return min;
  }
}
// @lc code=end

/**
 * @group 链表
 */
export const sort_list = sortList;
