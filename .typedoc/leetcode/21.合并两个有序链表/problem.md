# [21.合并两个有序链表](https://leetcode.cn/problems/merge-two-sorted-lists/description)

将两个升序链表合并为一个新的 升序 链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的。

---

## 示例 1：

![示例1](../images/21.合并两个有序链表.jpg)

**输入：** `list1 = [1,2,4], list2 = [1,3,4]`  
**输出：** `[1,1,2,3,4,4]`

---

## 示例 2：

**输入：** `list1 = [], list2 = []`  
**输出：** `[]`

---

## 示例 3：

**输入：** `list1 = [], list2 = [0]`  
**输出：** `[0]`

---

## 提示：

- 两个链表的节点数目范围是 `[0, 50]`
- `-100 <= Node.val <= 100`
- `list1` 和 `list2` 均按 非递减顺序 排列 