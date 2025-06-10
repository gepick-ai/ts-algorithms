/**
 * Definition for singly-linked list.
 */
export class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = (val === undefined ? 0 : val);
    this.next = (next === undefined ? null : next);
  }
}

/**
 * Definition for Random _Node.
 */
export class RandomNode {
  val: number;
  next: RandomNode | null;
  random: RandomNode | null;

  constructor(val?: number, next?: RandomNode, random?: RandomNode) {
    this.val = (val === undefined ? 0 : val);
    this.next = (next === undefined ? null : next);
    this.random = (random === undefined ? null : random);
  }
}
