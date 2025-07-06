/*
 * @lc app=leetcode id=138 lang=typescript
 *
 * [138] Copy List with Random Pointer
 */

import { RandomNode as _Node } from "./types";

// @lc code=start

// #region code
function copyRandomList(head: _Node | null): _Node | null {
  const dummy = new _Node(-1);
  let tail = dummy;
  let l1 = head;
  let l2 = dummy;
  const newToOld = new WeakMap<_Node, _Node>();
  const oldToNew = new WeakMap<_Node, _Node>();

  // 复制原链表
  while (l1) {
    l2 = new _Node(l1.val);
    tail.next = l2;

    newToOld.set(l2, l1);
    oldToNew.set(l1, l2);

    tail = tail.next;
    l1 = l1.next;
  }

  // 完成random指向
  l2 = dummy.next!;
  while (l2) {
    const old = newToOld.get(l2)!;
    const newRandom = oldToNew.get(old.random!)!;

    l2.random = newRandom;
    l2 = l2.next!;
  }

  return dummy.next;
};
// #endregion code

// @lc code=end

/**
 * {@include ../../../../../../.typedoc/leetcode/138.随机链表的复制/problem.md}
 *
 * @description {@include ../../../../../../.typedoc/leetcode/138.随机链表的复制/description.md}
 * {@includeCode ./copy-list-with-random-pointer.ts#code}
 *
 * @group 链表
 * @summary {@include ../../../../../../.typedoc/leetcode/138.随机链表的复制/summary.md}
 */
export const copy_list_with_random_pointer = copyRandomList;
