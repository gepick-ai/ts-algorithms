/*
 * @lc app=leetcode id=274 lang=typescript
 *
 * [274] H-Index
 */

// @lc code=start
function hIndex(citations: number[]): number {
    // h指数 = 至少发表了h篇论文，并且至少h篇论文被引用次数>=h。
    // citations.length代表发表了多少篇论文
    // 数组元素代表每篇论文被引用次数

    // 从长度为n的数组里，找到一个代表着长度为h的子数组里头的每个元素的值都>=h。其中h<=n。
    // [3,0,6,1,5]
    // 假设h=5，那么找到一个5个元素的子数组，且每个元素的值要>=5
    // 假设h=4，那么找到一个4个元素的子数组，且每个元素的值要>=4
    // 假设h=3，那么找到一个3个元素的子数组，且每个元素的值要>=3
    let h = citations.length;

    while(h > 0) {
        // 过滤掉值小于h的元素
       const newCitations =  citations.filter(c => c >= h);

        // 如果新数组长度小于h，说明不符合条件，往下调整h
       if(newCitations.length < h) {
         h--;
       }else {
        // 否则符合定义，直接返回h就是当前最大h
        return h
       }
    }

    return h
};
// @lc code=end

export const h_index = hIndex;