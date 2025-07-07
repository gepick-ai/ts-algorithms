/*
 * @lc app=leetcode id=25 lang=typescript
 *
 * [25] Reverse Nodes in k-Group
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

// 迭代解法
function reverseKGroup(head: ListNode | null, k: number): ListNode | null {
  let n = 0; // 先算出整个链表的长度
  for (let cur = head; cur !== null; cur = cur.next) {
    n++;
  }

  const dummy = new ListNode(-1, head);
  let p0 = dummy;
  let pre = null;
  let cur = p0.next!;

  // K个一组，循环反转
  while (n >= k) {
    n -= k;

    // 反转K个
    for (let i = 0; i < k; i++) {
      const nxt = cur.next;
      cur.next = pre;
      pre = cur;
      cur = nxt!;
    }

    const nxtP0 = p0.next!;
    nxtP0.next = cur;
    p0.next = pre;
    p0 = nxtP0;
  }

  return dummy.next;
};

// 递归解法
function reverseKGroup1(head: ListNode | null, k: number): ListNode | null {
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
// #endregion code

// @lc code=end

/**
 * {@include ../../../../../../.typedoc/leetcode/25.K个一组翻转链表/problem.md}
 *
 * @description {@include ../../../../../../.typedoc/leetcode/25.K个一组翻转链表/description.md}
 * {@includeCode ./reverse-nodes-in-k-group.ts#code}
 *
 * @group 链表
 * @summary {@include ../../../../../../.typedoc/leetcode/25.K个一组翻转链表/summary.md}
 */
export const reverse_nodes_in_k_group = reverseKGroup;
