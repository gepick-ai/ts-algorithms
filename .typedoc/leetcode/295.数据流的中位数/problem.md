# [295.数据流的中位数](https://leetcode.cn/problems/find-median-from-data-stream/description)

中位数是有序列表中间的数。如果列表长度是偶数，中位数则是中间两个数的平均值。

实现 MedianFinder 类：
- `MedianFinder()` 初始化 MedianFinder 对象。
- `void addNum(int num)` 将数据流中的整数 num 添加到数据结构中。
- `double findMedian()` 返回到目前为止所有元素的中位数。与实际答案相差 10^-5 以内的答案将被视为正确。

---

## 示例：

**输入：**
```
["MedianFinder", "addNum", "addNum", "findMedian", "addNum", "findMedian"]
[[], [1], [2], [], [3], []]
```
**输出：**
```
[null, null, null, 1.5, null, 2.0]
```
**解释：**
```
MedianFinder medianFinder = new MedianFinder();
medianFinder.addNum(1);    // arr = [1]
medianFinder.addNum(2);    // arr = [1, 2]
medianFinder.findMedian(); // 返回 1.5 (1 + 2) / 2 = 1.5
medianFinder.addNum(3);    // arr = [1, 2, 3]
medianFinder.findMedian(); // 返回 2.0
```

---

## 提示：

- `-10^5 <= num <= 10^5`
- 在调用 findMedian 之前，数据结构中至少有一个元素
- 最多 5 * 10^4 次 addNum 和 findMedian 调用 