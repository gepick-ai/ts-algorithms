/*
 * @lc app=leetcode id=21 lang=typescript
 *
 * [21] Merge Two Sorted Lists
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

function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
  const dummy = new ListNode(-1, null);
  let tail = dummy;

  while (list1 && list2) {
    if (list1.val <= list2.val) {
      tail.next = list1;
      list1 = list1.next;
      tail = tail.next;
    }
    else {
      tail.next = list2;
      list2 = list2.next;
      tail = tail.next;
    }
  }

  while (list1) {
    tail.next = list1;
    list1 = list1.next;
    tail = tail.next;
  }

  while (list2) {
    tail.next = list2;
    list2 = list2.next;
    tail = tail.next;
  }

  return dummy.next;
};

// @lc code=end

/**
 * {@include ../../../../../../.typedoc/problems/21.合并两个有序链表.md}
 *
 * @group 链表
 */
export const merge_two_sorted_lists = mergeTwoLists;
