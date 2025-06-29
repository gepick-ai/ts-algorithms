# [160.相交链表](https://leetcode.cn/problems/intersection-of-two-linked-lists/description)

给你两个单链表的头节点 `headA` 和 `headB`，请你找出并返回两个单链表相交的起始节点。如果两个链表没有交点，返回 `null`。

题目数据保证整个链式结构中不存在环。

---

## 示例 1：

![示例1](../images/160.相交链表.jpg)
**输入：** `intersectVal = 8, listA = [4,1,8,4,5], listB = [5,6,1,8,4,5], skipA = 2, skipB = 3`

**输出：** `Intersected at '8'`

**解释：** 相交节点的值为 8 （注意，如果两个链表相交则不能为 0）。从各自的头节点开始算起，链表 A 为 [4,1,8,4,5]，链表 B 为 [5,6,1,8,4,5]。在节点值为 8 处相交。题目数据保证链表结构中不存在环。

---

## 示例 2：

**输入：** `intersectVal = 2, listA = [1,9,1,2,4], listB = [3,2,4], skipA = 3, skipB = 1`

**输出：** `Intersected at '2'`

---

## 示例 3：

**输入：** `intersectVal = 0, listA = [2,6,4], listB = [1,5], skipA = 3, skipB = 2`

**输出：** `null`

**解释：** 两个链表没有相交。

---

## 提示：

- `listA` 中节点数目为 `m`
- `listB` 中节点数目为 `n`
- `1 <= m, n <= 3 * 10^4`
- `1 <= Node.val <= 10^5`
- `0 <= skipA < m`
- `0 <= skipB < n`
- 如果 `listA` 和 `listB` 没有交点，`intersectVal` 为 0
- 如果 `listA` 和 `listB` 有交点，`intersectVal == listA[skipA] == listB[skipB]` 