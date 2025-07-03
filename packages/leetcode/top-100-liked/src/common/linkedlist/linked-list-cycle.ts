/*
 * @lc app=leetcode id=141 lang=typescript
 *
 * [141] Linked List Cycle
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

function hasCycle(head: ListNode | null): boolean {
  const set = new WeakSet<ListNode>();

  while (head) {
    if (set.has(head)) {
      return true;
    }

    set.add(head);
    head = head.next;
  }

  return false;
};
// @lc code=end

/**
 * {@include ../../../../../../.typedoc/problems/141.环形链表.md}
 *
 * @answer
 * 用set记录遍历过的节点，如果遍历到set中存在的节点，说明有环。
 *
 * @group 链表
 */
export const linked_list_cycle = hasCycle;
