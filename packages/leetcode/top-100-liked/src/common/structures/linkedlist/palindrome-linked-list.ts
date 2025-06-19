/*
 * @lc app=leetcode id=234 lang=typescript
 *
 * [234] Palindrome Linked List
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

function isPalindrome(head: ListNode | null): boolean {
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

  return true;
};
// @lc code=end

/**
 * 转字符串判断回文。循环不变的条件是left<=right，兼容奇数和偶数的情况。
 *
 * @category 链表
 */
export const palindrome_linked_list = isPalindrome;
