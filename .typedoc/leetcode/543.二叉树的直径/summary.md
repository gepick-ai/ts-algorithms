#### 543.二叉树的直径【DFS】

从子树中的叶子节点到当前节点的路径叫做“链”。遍历每一个节点，然后在每一层计算当前子树的最大链长，然后加上1，形成当前子树的左侧链长和右侧链长，然后更新最大值。

```
                 1
   dfs(l)+1     / \    dfs(r)+1
               2   3
              / \   \
             4   5   6
```