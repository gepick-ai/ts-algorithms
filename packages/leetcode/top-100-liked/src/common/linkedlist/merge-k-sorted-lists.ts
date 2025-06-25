/*
 * @lc app=leetcode id=23 lang=typescript
 *
 * [23] Merge k Sorted Lists
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

function mergeKLists(lists: Array<ListNode | null>): ListNode | null {
  if (lists.length === 0) {
    return null;
  }

  let dummy = new ListNode(-1, null);
  let tail = dummy;
  let head1 = dummy.next;

  for (let i = 0; i < lists.length; i++) {
    let head2 = lists[i];

    tail = dummy;
    head1 = dummy.next;

    while (head1 && head2) {
      if (head1.val < head2.val) {
        tail.next = head1;
        tail = tail.next;
        head1 = head1.next;
      }
      else {
        tail.next = head2;
        tail = tail.next;
        head2 = head2.next;
      }
    }

    while (head1) {
      tail.next = head1;
      tail = tail.next;
      head1 = head1.next;
    }

    while (head2) {
      tail.next = head2;
      tail = tail.next;
      head2 = head2.next;
    }
  }

  return dummy.next;
};
// @lc code=end

/**
 * @category 链表
 * @summary 两两合并，循环重置head1和tail
 */
export const merge_k_sorted_lists = mergeKLists;
