/*
 * @lc app=leetcode id=24 lang=typescript
 *
 * [24] Swap Nodes in Pairs
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

function swapPairs(head: ListNode | null): ListNode | null {
  if (!head || !head.next) {
    return head;
  }

  const node1 = head;
  const node2 = head.next;
  const node3 = node2.next;

  node2.next = node1;
  node1.next = swapPairs(node3);

  return node2;
};
// @lc code=end

/**
 * @group 链表
 * @document ../../../../../../.typedoc/problems/24.两两交换链表中的节点.md
 *
 * @summary 按照题意递归模拟
 */
export const swap_nodes_in_pairs = swapPairs;
