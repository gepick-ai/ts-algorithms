# [739.每日温度](https://leetcode.cn/problems/daily-temperatures/description)

给定一个整数数组 `temperatures` ，表示每天的温度，返回一个数组 `answer`，其中 `answer[i]` 是指对于第 `i` 天，下一个更高温度出现在几天后。如果之后都不会有更高的温度，请在该位置用 `0` 替代。

---

## 示例 1：

**输入：** `temperatures = [73,74,75,71,69,72,76,73]`

**输出：** `[1,1,4,2,1,1,0,0]`

---

## 示例 2：

**输入：** `temperatures = [30,40,50,60]`

**输出：** `[1,1,1,0]`

---

## 示例 3：

**输入：** `temperatures = [30,60,90]`

**输出：** `[1,1,0]`

---

## 提示：

- `1 <= temperatures.length <= 10^5`
- `30 <= temperatures[i] <= 100` 