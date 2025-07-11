# [141.环形链表](https://leetcode.cn/problems/linked-list-cycle/description)

给你一个链表的头节点 `head`，判断链表中是否有环。

如果链表中存在某个节点，可以通过连续跟踪 `next` 指针再次到达，则链表中存在环。否则，链表中不存在环。

返回 `true` 如果链表中存在环。否则，返回 `false`。

---

## 示例 1：

![示例1](../images/141.环形链表1.png)

**输入：** `head = [3,2,0,-4], pos = 1`
**输出：** `true`
**解释：** 链表中有一个环，其尾部连接到第二个节点。

---

## 示例 2：

![示例2](../images/141.环形链表2.png)
**输入：** `head = [1,2], pos = 0`
**输出：** `true`
**解释：** 链表中有一个环，其尾部连接到第一个节点。

---

## 示例 3：

**输入：** `head = [1], pos = -1`
**输出：** `false`
**解释：** 链表中没有环。

---

## 提示：

- 链表中节点的数目范围是 `[0, 10^4]`
- `-10^5 <= Node.val <= 10^5`
- `pos` 为 `-1` 或者链表中的一个有效索引。 