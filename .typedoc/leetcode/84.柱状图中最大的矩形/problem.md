# [84.柱状图中最大的矩形](https://leetcode.cn/problems/largest-rectangle-in-histogram/description)

给定 n 个非负整数，用来表示柱状图中各个柱子的高度。每个柱子彼此相邻，且宽度为 1 。

求在该柱状图中，能够勾勒出来的矩形的最大面积。

---

## 示例 1：

![示例1](../images/84.柱状图中最大的矩形1.jpg)

**输入：** `heights = [2,1,5,6,2,3]`

**输出：** `10`

**解释：** 最大的矩形为 `5,6` 这两根柱子构成的面积为 `2*5=10`。

---

## 示例 2：

![示例2](../images/84.柱状图中最大的矩形2.jpg)
**输入：** `heights = [2,4]`

**输出：** `4`

---

## 提示：

- `1 <= heights.length <= 10^5`
- `0 <= heights[i] <= 10^4` 