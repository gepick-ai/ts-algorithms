/*
 * @lc app=leetcode id=146 lang=typescript
 *
 * [146] LRU Cache
 */

// @lc code=start

// #region code
class Node {
  constructor(
    public key: number,
    public val: number,
    public next: Node | null = null,
    public prev: Node | null = null,
  ) { }
}

class LinkedList {
  private dummy: Node;

  constructor() {
    this.dummy = new Node(-1, -1);
    this.dummy.prev = this.dummy;
    this.dummy.next = this.dummy;
  }

  get last() {
    return this.dummy.prev;
  }

  addNodeByKey(key: number, val: number): Node {
    return this.addNode(new Node(key, val));
  }

  // 头插法，把新节点放到最前面（dummy后面）
  addNode(node: Node): Node {
    // 记住当前的位置
    const dummy = this.dummy;
    const oldFirst = this.dummy.next!;

    // 把新节点放到最前面（dummy后面）
    node.prev = dummy;
    dummy.next = node;

    // 把新节点和原来的第一个节点连起来（这个部分做到了双链表的循环）
    node.next = oldFirst;
    oldFirst.prev = node;

    return node;
  }

  delNode(node: Node): void {
    node.prev!.next = node.next;
    node.next!.prev = node.prev;
  }
}

class LRUCache {
  private nodeList: LinkedList = new LinkedList();
  private keyToNode: Map<number, Node> = new Map();

  constructor(private capacity: number) { }

  /**
   * O(1)
   * 如果key存在，返回key对应的value
   * 如果key不存在，返回-1
   */
  get(key: number): number {
    const node = this.getNode(key);

    return node ? node.val : -1;
  }

  /**
   * 如果key存在，变更key对应的value；
   * 如果key不存在，插入key。
   */
  put(key: number, val: number): void {
    const node = this.getNode(key);

    // 如果key存在，变更key对应的value
    if (node) {
      node.val = val;
    }
    else {
      this.addNode(key, val);
    }
  }

  protected addNode(key: number, val: number): Node {
    // 如果key不存在，插入key。（插入之前，如果插入的时候超出了容量capacity，那么应该放弃最久没使用的key）
    // 如果插入的时候超出了容量capacity,应该放弃最久没使用的key。涉及的两个结构都要删除key相关的内容
    if (this.keyToNode.size === this.capacity) {
      this.delNotUsed();
    }

    const node = this.nodeList.addNodeByKey(key, val);
    this.keyToNode.set(key, node);

    return node;
  }

  protected getNode(key: number): Node | undefined {
    const node = this.keyToNode.get(key);

    if (node) {
      this.markUsed(node);
    }

    return node;
  }

  protected markUsed(node: Node): void {
    this.nodeList.delNode(node);
    this.nodeList.addNode(node);
  }

  protected delNotUsed(): void {
    const node = this.nodeList.last;

    if (node) {
      this.nodeList.delNode(node);
      this.keyToNode.delete(node.key);
    }
  }
}

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */

// #endregion code

// @lc code=end

/**
 * {@include ../../../../../../.typedoc/leetcode/146.LRU缓存/problem.md}
 *
 * @description {@include ../../../../../../.typedoc/leetcode/146.LRU缓存/description.md}
 * {@includeCode ./lru-cache.ts#code}
 *
 * @group 链表
 * @summary {@include ../../../../../../.typedoc/leetcode/146.LRU缓存/summary.md}
 */
export const lru_cache = LRUCache;
