/*
 * @lc app=leetcode id=24 lang=typescript
 *
 * [24] Swap Nodes in Pairs
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

function swapPairs(head: ListNode | null): ListNode | null {
  function reverseGroup(head: ListNode | null, k: number): ListNode | null {
    // 先算出链表长度
    let n = 0;
    for (let cur = head; cur !== null; cur = cur.next) {
      n++;
    }

    const dummy = new ListNode(-1, head);
    let p0 = dummy;
    // K个一组，循环反转
    while (n >= k) {
      n -= k;

      let pre = null;
      let cur = p0.next!;
      // 反转K个
      for (let i = 0; i < k; i++) {
        const nxt = cur.next;
        cur.next = pre;
        pre = cur;
        cur = nxt!;
      }

      // 反转完后的收尾
      const nxtP0 = p0.next!;
      nxtP0.next = cur;
      p0.next = pre;
      p0 = nxtP0;
    }

    return dummy.next;
  }

  return reverseGroup(head, 2);
};

// 递归解法
function swapPairs1(head: ListNode | null): ListNode | null {
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
// #endregion code

// @lc code=end

/**
 * {@include ../../../../../../.typedoc/leetcode/24.两两交换链表中的节点/problem.md}
 *
 * @description {@include ../../../../../../.typedoc/leetcode/24.两两交换链表中的节点/description.md}
 * {@includeCode ./swap-nodes-in-pairs.ts#code}
 *
 * @group 链表
 * @summary {@include ../../../../../../.typedoc/leetcode/24.两两交换链表中的节点/summary.md}
 */
export const swap_nodes_in_pairs = swapPairs;
