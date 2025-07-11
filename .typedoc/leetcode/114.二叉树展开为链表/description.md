### 算法步骤

**核心思路**：
利用前序遍历将二叉树展开为链表，使用一个全局指针 `cur` 来构建链表。

**算法步骤**：

1. **初始化**：创建一个虚拟节点 `cur = new TreeNode(-1)` 作为链表的起始点

2. **前序遍历**：使用DFS前序遍历（根-左-右）访问每个节点

3. **链表构建**：
   - 将当前节点连接到 `cur.right`
   - 将当前节点的 `left` 设为 `null`
   - 更新 `cur` 为当前节点

4. **递归处理**：分别递归处理左子树和右子树

**关键实现细节**：
- 使用全局变量 `cur` 追踪链表的当前末尾节点
- 在访问每个节点时，将其添加到链表的末尾
- 通过前序遍历确保节点按照正确顺序连接

**示例**：
```
原始树：
    1
   / \
  2   5
 / \   \
3   4   6

展开后：
1 -> 2 -> 3 -> 4 -> 5 -> 6
```

**时间复杂度**：O(n)  
**空间复杂度**：O(h)，其中h是树的高度
