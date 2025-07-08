/*
 * @lc app=leetcode id=234 lang=typescript
 *
 * [234] Palindrome Linked List
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

// 寻找中间节点+反转链表解法
function isPalindrome(head: ListNode | null): boolean {
  function middleNode(head: ListNode | null): ListNode | null {
    let slow = head;
    let fast = head;

    while (fast && fast.next) {
      slow = slow!.next;
      fast = fast.next.next;
    }

    return slow;
  };

  function reverseList(head: ListNode | null): ListNode | null {
    let pre = null;
    let cur = head;

    while (cur) {
      const nxt = cur.next;
      cur.next = pre;
      pre = cur;
      cur = nxt;
    }

    return pre;
  }
  const mid = middleNode(head);
  let pre = reverseList(mid);

  while (pre) {
    if (pre.val !== head!.val) {
      return false;
    }

    pre = pre.next;
    head = head!.next;
  }

  return true;
};

// 双指针解法
function isPalindrome1(head: ListNode | null): boolean {
  let s = '';

  while (head) {
    s += head.val;

    head = head.next;
  }

  let left = 0;
  let right = s.length - 1;

  while (left <= right) {
    if (s[left] !== s[right]) {
      return false;
    }

    left++;
    right--;
  }

  return true
};

// #endregion code
// @lc code=end

/**
 * {@include ../../../../../../.typedoc/leetcode/234.回文链表/problem.md}
 *
 * @description {@include ../../../../../../.typedoc/leetcode/234.回文链表/description.md}
 * {@includeCode ./palindrome-linked-list.ts#code}
 *
 * @group 链表
 * @summary {@include ../../../../../../.typedoc/leetcode/234.回文链表/summary.md}
 */
export const palindrome_linked_list = isPalindrome;
