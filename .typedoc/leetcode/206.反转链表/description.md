#### 算法步骤

##### 头插法

- 利用三个指针pre、cur、nxt。
- 遍历整条链表，先让nxt指向cur的下一个节点。
- 然后让cur的next指向pre。
- 然后让pre指向cur。
- 然后让cur指向nxt。
- 重复上述操作，直到cur为空。
- 最后返回pre。

#### 总结

**核心思想：**
反转链表的核心是改变每个节点的next指针方向，从头到尾依次反转。

**解题技巧：**

> **头插法 vs 尾插法对比**
> 
> **头插法（用于反转）：**
> ```ts
> const dummy = new ListNode(-1);
> 
> // 新节点插入到dummy后面
> const newNode = new ListNode(val);
> newNode.next = dummy.next;
> dummy.next = newNode;
> // 结果：新节点在链表最前面
> ```
> 
> **尾插法（用于保持顺序）：**
> ```ts
> const dummy = new ListNode(-1);
> const tail = dummy;
> 
> const newNode = new ListNode(val);
> tail.next = newNode;
> tail = tail.next;
> // 结果：新节点在链表最后面
> ```

**应用场景：**
- **头插法**：反转链表、栈实现、LRU缓存
- **尾插法**：合并有序链表、队列实现、复制链表