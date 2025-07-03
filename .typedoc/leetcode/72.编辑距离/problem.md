# [72.编辑距离](https://leetcode.cn/problems/edit-distance/description)

给你两个单词 `word1` 和 `word2`，请你计算出将 `word1` 转换成 `word2` 所使用的最少操作数 。

你可以对一个单词进行如下三种操作：
1. 插入一个字符
2. 删除一个字符
3. 替换一个字符

---

## 示例 1：

**输入：** `word1 = "horse"`, `word2 = "ros"`

**输出：** `3`

**解释：**
- horse -> rorse (替换 'h' 为 'r')
- rorse -> rose (删除 'r')
- rose -> ros (删除 'e')

---

## 示例 2：

**输入：** `word1 = "intention"`, `word2 = "execution"`

**输出：** `5`

**解释：**
- intention -> inention (删除 't')
- inention -> enention (替换 'i' 为 'e')
- enention -> exention (替换 'n' 为 'x')
- exention -> exection (替换 'n' 为 'c')
- exection -> execution (插入 'u')

---

## 提示：

- `0 <= word1.length, word2.length <= 500`
- `word1` 和 `word2` 由小写英文字母组成 