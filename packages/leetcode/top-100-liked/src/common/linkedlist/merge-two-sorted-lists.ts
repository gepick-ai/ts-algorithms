/*
 * @lc app=leetcode id=21 lang=typescript
 *
 * [21] Merge Two Sorted Lists
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

function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
  const dummy = new ListNode(-1, null);
  let tail = dummy;
  let l1 = list1;
  let l2 = list2;

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

  tail.next = l1 ?? l2;

  return dummy.next;
};

// #endregion code

// @lc code=end

/**
 * {@include ../../../../../../.typedoc/leetcode/21.合并两个有序链表/problem.md}
 *
 * @description {@include ../../../../../../.typedoc/leetcode/21.合并两个有序链表/description.md}
 * {@includeCode ./merge-two-sorted-lists.ts#code}
 *
 * @group 链表
 * @summary {@include ../../../../../../.typedoc/leetcode/21.合并两个有序链表/summary.md}
 */
export const merge_two_sorted_lists = mergeTwoLists;
