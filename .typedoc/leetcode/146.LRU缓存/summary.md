#### 146.LRU缓存【特殊结构】

哈希表+循环双链表

![LRU缓存](../images/146.LRU缓存1.png)

- 空链表时：dummy ⇄ dummy

- 插入节点A后：dummy ⇄ A ⇄ dummy

- 插入节点B后：dummy ⇄ B ⇄ A ⇄ dummy

- 删除节点A后：dummy ⇄ B ⇄ dummy

- 删除节点B后：dummy ⇄ dummy
