/*
 * @lc app=leetcode id=148 lang=typescript
 *
 * [148] Sort List
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

function sortList(head: ListNode | null): ListNode | null {
  function mergeTwoLists(l1: ListNode | null, l2: ListNode | null) {
    const dummy = new ListNode(-1, null);
    let tail = dummy;

    while (l1 && l2) {
      if (l1.val <= l2.val) {
        tail.next = l1;
        l1 = l1.next;
      }
      else {
        tail.next = l2;
        l2 = l2.next;
      }

      tail = tail.next;
    }

    tail.next = l1 || l2;

    return dummy.next;
  }

  function middleNode(head: ListNode | null) {
    let slow = head;
    let fast = head;
    let pre = head;

    while (fast && fast.next) {
      pre = slow;
      slow = slow!.next;
      fast = fast.next.next;
    }

    pre!.next = null;

    return slow;
  }

  if (!head || !head.next) {
    return head;
  }

  const mid = middleNode(head);

  const l1 = sortList(head);
  const l2 = sortList(mid);

  return mergeTwoLists(l1, l2);
};

// #endregion code

// @lc code=end

/**
 * {@include ../../../../../../.typedoc/leetcode/148.排序链表/problem.md}
 *
 * @description {@include ../../../../../../.typedoc/leetcode/148.排序链表/description.md}
 * {@includeCode ./sort-list.ts#code}
 *
 * @group 链表
 * @summary {@include ../../../../../../.typedoc/leetcode/148.排序链表/summary.md}
 */
export const sort_list = sortList;
