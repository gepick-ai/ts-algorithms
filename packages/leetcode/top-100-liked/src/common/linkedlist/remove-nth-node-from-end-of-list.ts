/*
 * @lc app=leetcode id=19 lang=typescript
 *
 * [19] Remove Nth Node From End of List
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

function removeNthFromEnd(head: ListNode | null, n: number): ListNode | null {
  // 1，2，3，4，5，倒数第1，就是正数第5。倒数第2，就是正数第4，倒数第3，就是正数第3。
  // 5 1 5 ｜ 5 2 4 ｜ 5 3 3 ｜ 5 4 2 ｜ 5 5 1
  // 因此s个节点，倒数第i，就是正数第(s+1) - i;

  const dummy = new ListNode(-1, null);

  dummy.next = head;

  let total = 0;

  while (head) {
    total++;
    head = head.next;
  }

  let curLoc = 0;
  let curNode = dummy;
  let targetLoc = total + 1 - n;

  while (curLoc < targetLoc - 1) {
    curLoc++;
    curNode = curNode.next!;
  }

  const toDelete = curNode.next;

  curNode.next = toDelete!.next;
  toDelete!.next = null;

  return dummy.next;
};
// @lc code=end

export const remove_nth_node_from_end_of_list = removeNthFromEnd;
