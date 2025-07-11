/*
 * @lc app=leetcode id=23 lang=typescript
 *
 * [23] Merge k Sorted Lists
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

// 暴力解法
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

// #endregion code
// @lc code=end

/**
 * {@include ../../../../../../.typedoc/leetcode/23.合并K个升序链表/problem.md}
 *
 * @description {@include ../../../../../../.typedoc/leetcode/23.合并K个升序链表/description.md}
 * {@includeCode ./merge-k-sorted-lists.ts#code}
 *
 * @group 链表
 * @summary {@include ../../../../../../.typedoc/leetcode/23.合并K个升序链表/summary.md}
 */
export const merge_k_sorted_lists = mergeKLists;
