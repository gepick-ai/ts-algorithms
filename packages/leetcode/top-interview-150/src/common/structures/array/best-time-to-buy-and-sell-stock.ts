/*
 * @lc app=leetcode id=121 lang=typescript
 *
 * [121] Best Time to Buy and Sell Stock
 */

// @lc code=start
function maxProfit(prices: number[]): number {
  // 我们可以看到每一天的价格，假如从第一天买，某一天卖出。只要看到后一天有比前一天股票价格低的，我们就放弃第一天买，选择新的股票买入
  // 因为是上帝视角，策略当然是股票买入价格越低越好，这样子卖出的利润才会越大。当发现价格低的，我们就抛弃价格高的就好了
  let lowest = prices[0];
  let max = 0;

  // 假如从第二天开始计算可能的卖出利润
  for (let i = 0; i < prices.length; i++) {
    // 如果卖出利润都不大于max，那么没必要更新利润
    const curPrice = prices[i];
    const profit = curPrice - lowest;
    if (max >= profit) {
      // 在此情况下，我们尝试看看股票价格是否能够重新选
      if (lowest > curPrice) {
        lowest = curPrice;
      }
    }
    else {
      // 否则我们更新利润
      max = profit;
    }
  }

  return max;
};
// @lc code=end

/**
 * 买卖股票，设计两个变量，一个记录最低价格，一个记录最大利润。
 * 遍历数组，如果当前价格比最低价格低，则更新最低价格。
 * 如果当前价格比最低价格高，则计算当前价格与最低价格的差值，如果差值大于最大利润，则更新最大利润。
 *
 * 因为我们有上帝视角，当然希望拿着越低的价格，在后面尝试卖出，这样利润才可能越大。
 * 拿到最低价格买入，不一定能够拿到最大利润。因为可能中间卖出利润更大，所以需要遍历数组，找到最大利润。
 * 比如[4,6,1,2,1]，最低价格虽然是1(从这里开始最多利润只有1)，但最大利润是2（6-4)
 */
export const best_time_to_buy_and_sell_stock = maxProfit;
