#### 124.二叉树中的最大路径和【DFS】

对于当前节点node，该节点的处的max值可能：
1、当前节点和两侧节点都要
2、当前节点和左右当中一侧的节点
3. 如果两侧贡献值都是负数，越加越小，那么直接不要两侧，也就是取0


