# [136.只出现一次的数字](https://leetcode.cn/problems/single-number/description)

给你一个非空整数数组 `nums`，除了某个元素只出现一次以外，其余每个元素均出现两次。找出那个只出现了一次的元素。

你必须设计并实现线性时间复杂度的算法来解决此问题，并且只使用常量级额外空间。

---

## 示例 1：

**输入：** `nums = [2,2,1]`

**输出：** `1`

---

## 示例 2：

**输入：** `nums = [4,1,2,1,2]`

**输出：** `4`

---

## 示例 3：

**输入：** `nums = [1]`

**输出：** `1`

---

## 提示：

- `1 <= nums.length <= 3 * 10^4`
- `-3 * 10^4 <= nums[i] <= 3 * 10^4`
- 除了某个元素只出现一次以外，其余每个元素均出现两次。 