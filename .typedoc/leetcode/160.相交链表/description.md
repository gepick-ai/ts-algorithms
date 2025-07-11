### 算法步骤

#### 解法一 Set
判断两段链表是否有交点，拿set放入一条链表所有节点，然后遍历另一条链表，如果set中存在越靠前遍历到的节点，说明就是交点。

#### 解法二 双指针

本质是构造两条等长链表。假设`a`长度为`lenA`，`b`长度为`lenB`，共同长度为`lenC`，补齐各自缺少对方的节点，构造出两条同样长的新链表。
则`lenA + lenC + lenB = lenB + lenC + lenA`。 由于`a`和`b`两个走的路程是一样长的，把相交节点叫`NodeC`，则`a`，`b`两者走到的终点就是`NodeC`。其中`NodeC`可以是一个节点或者`null`空节点。
```ts
// A: 1 -> 2 -> 3 
//               -> C -> 4 -> 5 -> null
// B: 6 -> 7 
// A + B: 1 -> 2 -> 3 -> C(相交点) -> 4 -> 5 -> null -> 6 -> 7 -> C(相交点) -> 4 -> 5 -> null
// B + A: 6 -> 7 -> C(相交点) -> 4 -> 5 -> null -> 1 -> 2 -> 3 -> C(相交点) -> 4 -> 5 -> null
```