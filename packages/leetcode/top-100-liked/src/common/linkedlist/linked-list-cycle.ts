/*
 * @lc app=leetcode id=141 lang=typescript
 *
 * [141] Linked List Cycle
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

// 快慢指针解法
function hasCycle(head: ListNode | null): boolean {
  let slow = head;
  let fast = head;

  while (fast && fast.next) {
    slow = slow!.next;
    fast = fast.next.next;

    if (slow === fast) {
      return true;
    }
  }

  return false;
};

// 哈希解法
function hasCycle1(head: ListNode | null): boolean {
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

// #endregion code

// @lc code=end

/**
 * {@include ../../../../../../.typedoc/leetcode/141.环形链表/problem.md}
 *
 * @description
 * 用set记录遍历过的节点，如果遍历到set中存在的节点，说明有环。
 *
 * @group 链表
 * @summary {@include ../../../../../../.typedoc/leetcode/141.环形链表/summary.md}
 */
export const linked_list_cycle = hasCycle;
