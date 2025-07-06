/*
 * @lc app=leetcode id=2 lang=typescript
 *
 * [2] Add Two Numbers
 */

import { ListNode } from "./types";

// @lc code=start

// #region code

/**
 * Definition for singly-linked list.
 * class ListNode {
 * val: number
 * next: ListNode | null
 * constructor(val?: number, next?: ListNode | null) {
 * this.val = (val===undefined ? 0 : val)
 * this.next = (next===undefined ? null : next)
 * }
 * }
 */

function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
  const dummy = new ListNode(-1);
  let tail = dummy;
  let carry = 0;

  while (l1 || l2) {
    let sum = (l1?.val ?? 0) + (l2?.val ?? 0) + carry;
    carry = Math.floor(sum / 10);

    tail.next = new ListNode(sum % 10);
    tail = tail.next;

    if (l1) {
      l1 = l1.next;
    }

    if (l2) {
      l2 = l2.next;
    }
  }

  if (carry > 0) {
    tail.next = new ListNode(carry);
  }

  return dummy.next;
};
// #endregion code

// @lc code=end

/**
 * {@include ../../../../../../.typedoc/leetcode/2.两数相加/problem.md}
 *
 * @description {@include ../../../../../../.typedoc/leetcode/2.两数相加/description.md}
 * {@includeCode ./add-two-numbers.ts#code}
 *
 * @group 链表
 * @summary {@include ../../../../../../.typedoc/leetcode/2.两数相加/summary.md}
 */
export const add_two_numbers = addTwoNumbers;
