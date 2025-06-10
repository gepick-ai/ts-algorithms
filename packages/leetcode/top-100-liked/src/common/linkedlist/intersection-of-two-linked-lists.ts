/*
 * @lc app=leetcode id=160 lang=typescript
 *
 * [160] Intersection of Two Linked Lists
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

function getIntersectionNode(headA: ListNode | null, headB: ListNode | null): ListNode | null {
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
// @lc code=end

/**
 * 判断两段链表是否有交点，拿set放入一条链表所有节点，然后遍历另一条链表，如果set中存在越靠前遍历到的节点，说明就是交点。
 */
export const intersection_of_two_linked_lists = getIntersectionNode;
