/*
 * @lc app=leetcode id=142 lang=typescript
 *
 * [142] Linked List Cycle II
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

function detectCycle(head: ListNode | null): ListNode | null {
  const set = new WeakSet<ListNode>();

  while (head) {
    if (set.has(head)) {
      return head;
    }

    set.add(head);
    head = head.next;
  }

  return null;
};
// @lc code=end

/**
 * 和第一个题型一样，用set记录遍历过的节点，如果遍历到set中存在的节点，说明有环。直接返回该节点
 *
 * @group 链表
 */
export const linked_list_cycle_ii = detectCycle;
