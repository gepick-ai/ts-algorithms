/*
 * @lc app=leetcode id=146 lang=typescript
 *
 * [146] LRU Cache
 */

// @lc code=start

class DNode {
  constructor(public key: number, public value: number, public next: DNode | null = null, public prev: DNode | null = null) { }
}

class LinkedList {
  private dummy: DNode = new DNode(-1, -1);
  private tail: DNode | null = this.dummy;

  getHead() {
    return this.dummy.next;
  }

  addNodeByKey(key: number, value: number): DNode {
    const node = new DNode(key, value);

    return this.addNode(node);
  }

  addNode(node: DNode): DNode {
    this.tail!.next = node;
    node.prev = this.tail;
    this.tail = node;

    return node;
  }

  deleteNode(node: DNode): DNode {
    const prev = node.prev;
    const next = node.next;

    prev!.next = next;
    if (next) {
      next!.prev = prev;
    }
    else {
      this.tail = prev;
    }
    node.prev = null;
    node.next = null;

    return node;
  }
}

class LRUCache {
  private list: LinkedList;
  private map: Map<number, DNode> = new Map();
  private size: number = 0;

  constructor(private capacity: number) {
    this.list = new LinkedList();
  }

  /**
        * O(1)
        * 如果key存在，返回key对应的value
        * 如果key不存在，返回-1
        */
  get(key: number): number {
    const node = this.getNode(key);

    if (!node) {
      return -1;
    }

    this.markLatestUsed(node);

    return node.value;
  }

  /**
       * 如果key存在，变更key对应的value；
       * 如果key不存在，插入key。（如果插入的时候超出了容量capacity，那么应该放弃最久没使用的key）
       */
  put(key: number, value: number): void {
    const node = this.getNode(key);

    // 如果key存在，变更key对应的value
    if (node) {
      node.value = value;
      this.markLatestUsed(node);
    }
    else {
      // 如果key不存在，插入key。（插入之前，如果插入的时候超出了容量capacity，那么应该放弃最久没使用的key）

      // 如果插入的时候超出了容量capacity,应该放弃最久没使用的key。涉及的两个结构都要删除key相关的内容
      if (this.isFull()) {
        this.deleteNotUsed();
      }

      this.addNode(key, value);
    }
  }

  protected addNode(key: number, value: number): DNode {
    const node = this.list.addNodeByKey(key, value);
    this.map.set(key, node);
    this.size++;

    return node;
  }

  protected getNode(key: number): DNode | null {
    const node = this.map.get(key);

    if (!node) {
      return null;
    }

    return node;
  }

  protected isFull(): boolean {
    return this.size === this.capacity;
  }

  protected markLatestUsed(node: DNode): void {
    this.list.deleteNode(node);
    this.list.addNode(node);
  }

  protected deleteNotUsed(): void {
    const head = this.list.getHead();

    if (head) {
      this.list.deleteNode(head);
      this.map.delete(head.key);
      this.size--;
    }
  }
}

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */
// @lc code=end

/**
 * {@include ../../../../../../.typedoc/problems/146.LRU缓存.md}

 *
 * @description
 * 题目要求get和put时间复杂度在O(1)。那么需要找到符合get或者put复杂度在O(1)内，符合这样的常见结构有链表、哈希表、数组，同时满足的只有map。但是map没法表达“最久没用”这个概念，同时我们还需要在超出容量的时候O(1)删除最久没用的key，因此我们想到双链表：
 * 设计双向链表list，越靠看头部，那么说明结点加入的时间越久远
 * n1 <=> n2 <=> n3 <=> n4 <=> n5 -> null
 * capcity代表链表的节点总数。
 * 但是双链表没法O(1)获取，于是我们加入哈希表结构，让整个数据结构能够以O(1)的方式获取。我们让key-node的映射关系存储在map当中。
 * 通过key迅速拿到node，然后拿到其中的value。
 *
 * 注意：对于双链表，在进行get或者put操作后，需要更新相关节点，让其处于链表尾部表示最近使用了，它应该从头部删除，因为它不是最久没使用的了。
 *
 * 整体方案：实现新数据结构的“增、删、查、改”,利用哈希表+双链表实现这个数据结构。
 *
 * @group 链表
 */
export const lru_cache = LRUCache;
