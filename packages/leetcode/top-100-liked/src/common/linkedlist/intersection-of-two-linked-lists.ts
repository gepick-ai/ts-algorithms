/*
 * @lc app=leetcode id=160 lang=typescript
 *
 * [160] Intersection of Two Linked Lists
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

// 双指针解法
function getIntersectionNode(headA: ListNode | null, headB: ListNode | null): ListNode | null {
  let a = headA;
  let b = headB;

  while (a !== b) {
    a = a ? a.next : headB;
    b = b ? b.next : headA;
  }

  return a;
};

// Set解法
function getIntersectionNode1(headA: ListNode | null, headB: ListNode | null): ListNode | null {
  const aSet = new WeakSet<ListNode>();

  while (headA) {
    aSet.add(headA);
    headA = headA.next;
  }

  while (headB) {
    if (aSet.has(headB)) {
      return headB;
    }

    headB = headB.next;
  }

  return null;
};
// #endregion code
// @lc code=end

/**
 * {@include ../../../../../../.typedoc/leetcode/160.相交链表/problem.md}
 *
 * @description
 * 
 *
 * @group 链表
 * @summary {@include ../../../../../../.typedoc/leetcode/160.相交链表/summary.md}
 */
export const intersection_of_two_linked_lists = getIntersectionNode;
