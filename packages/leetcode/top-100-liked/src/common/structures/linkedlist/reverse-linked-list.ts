/*
 * @lc app=leetcode id=206 lang=typescript
 *
 * [206] Reverse Linked List
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

function reverseList(head: ListNode | null): ListNode | null {
  // 要反转链表a->b->c，可以先反转b->c，然后让其next为a
  // 要反转b->c，可以先反转c，然后让其next为b

  if (!head || !head.next) {
    return head;
  }

  const newHead = reverseList(head.next);

  // NOTE: 这行代码是实现的卡点
  // 正确做法：先形成环，然后才断开。head.next.next就是新节点的next。
  // 比如[1,2,3,4,5]，newList是5，head是4，head.next.next就是5，然后让5的next为4
  // 然后让4的next为null，解开环。再接着就是来到3->4<-5，此时head是3，newList是5，head.next.next就是4，然后让4的next为3
  // 然后让3的next为null，解开环。再接着就是来到2->3<-4<-5，此时head是2，newList是5，head.next.next就是3，然后让3的next为2
  // 然后让2的next为null，解开环。再接着就是来到1->2<-3<-4<-5，此时head是1，newList是5，head.next.next就是2，然后让2的next为1
  // 然后让1的next为null，解开环。
  head.next.next = head;

  // 错误做法：错误在于总认为返回的newList是新的值，其实一直都是最后一个节点的引用。比如[1,2,3,4,5]返回的newList一直都是5。按照如下代码，其实效果就是返回5，指向4。返回5指向3，返回5指向2，返回5指向1。结果就是[5,1]
  // newList.next =head;

  // 解开环
  head.next = null;

  return newHead;
};
// @lc code=end

/**
 * @category 链表
 */
export const reverse_linked_list = reverseList;
