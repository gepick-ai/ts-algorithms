/*
 * @lc app=leetcode id=25 lang=typescript
 *
 * [25] Reverse Nodes in k-Group
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

function reverseKGroup(head: ListNode | null, k: number): ListNode | null {
  // 判断是否小于k，如果小于k，一定会在循环中return head
  let p = head;
  for (let i = 0; i < k; i++) {
    if (p === null) {
      return head;
    }
    p = p.next;
  }

  // 反转k个链表
  let pre: ListNode | null = null;
  let cur: ListNode | null = head;
  let nxt: ListNode | null = null;

  // 1->2->3->4->null
  for (let i = 0; i < k; i++) {
    nxt = cur!.next;
    cur!.next = pre;
    pre = cur;
    cur = nxt;
  }

  // k个一组反转后，原本的头就变成了这组的尾，继续反转下一组
  head!.next = reverseKGroup(cur, k);

  return pre;
};
// @lc code=end

/**
 * {@include ../../../../../../.typedoc/problems/25.K个一组翻转链表.md}
 *
 * @group 链表
 */
export const reverse_nodes_in_k_group = reverseKGroup;
