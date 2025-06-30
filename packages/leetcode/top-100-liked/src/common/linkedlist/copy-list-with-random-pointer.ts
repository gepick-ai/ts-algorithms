/*
 * @lc app=leetcode id=138 lang=typescript
 *
 * [138] Copy List with Random Pointer
 */

import { RandomNode as _Node } from "./types";

// @lc code=start

function copyRandomList(head: _Node | null): _Node | null {
  // 除去random部分，按照正常逻辑copy一条链表很简单
  // 麻烦的地方在于需要记住copy的节点的random应该指向新链表中的谁。
  // 我们知道原来的节点的random是谁，如果我们可以通过关联原来的random节点和copy后的random节点，我们就可以知道目前copy节点的老节点是谁，映射copy -> old，这样子，我们就可以知道old random，再从另一个字典当中找old random-> copy random应该就能找到现在random要指向谁了。

  // 我们在复制的时候就能够将新旧节点的映射关系记好。
  // 我们要两张map，map1: old -> new ，map2: new -> old

  // 整体方案：
  // 1. 遍历链表，克隆链表的每一个节点
  // 2. 在克隆节点的过程当中，用oldToNewMap记录住老节点与新节点的映射 ，用newToOldMap记录住新节点与老节点的映射
  // 3. 初始化先不管每个节点的random。当初步克隆完整条链表后，我们对新链表进行操作。
  // 4. 拿着两个map和新链表进行操作，遍历新链表。
  // 5. 在遍历新链表的过程当中，针对每一个节点，从newToOldMap中拿到对应的old节点，然后从old节点拿出这个节点的random节点。由于该random节点也是原链表的一个节点，所以我们可以从oldToNewMap当中，找到这个节点对应的new节点。这个new节点就在新链表上，这样子我们可以直接将当前遍历到的新链表节点的random指向new节点。
  // 6.循环操作，直到链表遍历完。

  const oldToNewMap = new WeakMap<_Node, _Node>();
  const newToOldMap = new WeakMap<_Node, _Node>();
  const dummy = new _Node(-1);
  let tail = dummy;

  // 完成链表基础克隆
  while (head) {
    const node = new _Node(head.val);

    oldToNewMap.set(head, node);
    newToOldMap.set(node, head);

    tail.next = node;

    head = head.next;
    tail = tail.next;
  }

  let newHead = dummy.next;

  while (newHead) {
    const oldNode = newToOldMap.get(newHead)!;
    const newRandomNode = oldToNewMap.get(oldNode.random!)!;

    newHead.random = newRandomNode;
    newHead = newHead.next;
  }

  return dummy.next;
};
// @lc code=end

/**
 * @group 链表
 * @document ../../../../../../.typedoc/problems/138.复制带随机指针的链表.md
 */
export const copy_list_with_random_pointer = copyRandomList;
