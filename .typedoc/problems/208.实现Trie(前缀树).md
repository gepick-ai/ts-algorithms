# [208.实现Trie(前缀树)](https://leetcode.cn/problems/implement-trie-prefix-tree/description)

实现一个 Trie (前缀树)，包含 `insert`、`search` 和 `startsWith` 这三个操作。

---

## 示例：

**输入：**
```
["Trie", "insert", "search", "search", "startsWith", "insert", "search"]
[[], ["apple"], ["apple"], ["app"], ["app"], ["app"], ["app"]]
```
**输出：**
```
[null, null, true, false, true, null, true]
```
**解释：**
```
Trie trie = new Trie();
trie.insert("apple");
trie.search("apple");   // 返回 True
trie.search("app");     // 返回 False
trie.startsWith("app"); // 返回 True
trie.insert("app");
trie.search("app");     // 返回 True
```

---

## 提示：

- `1 <= word.length, prefix.length <= 2000`
- `word` 和 `prefix` 仅由小写英文字母组成
- `insert`、`search` 和 `startsWith` 调用次数 总计 不超过 `3 * 10^4` 