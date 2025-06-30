/*
 * @lc app=leetcode id=2 lang=typescript
 *
 * [2] Add Two Numbers
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

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
  const dummy = new ListNode(-1, null);
  let tail = dummy;
  let carry = 0;

  while (l1 || l2) {
    const val1 = l1 ? l1.val : 0;
    const val2 = l2 ? l2.val : 0;
    const sum = val1 + val2 + carry;
    carry = Math.floor(sum / 10);
    const val = sum % 10;
    tail.next = new ListNode(val, null);
    tail = tail.next;

    if (l1) {
      l1 = l1.next;
    }

    if (l2) {
      l2 = l2.next;
    }
  }

  if (carry) {
    tail.next = new ListNode(carry, null);
  }

  return dummy.next;
};
// @lc code=end

/**
 * @group 链表
 * @document ../../../../../../.typedoc/problems/2.两数相加.md
 */
export const add_two_numbers = addTwoNumbers;
