/*
 * @lc app=leetcode id=122 lang=typescript
 *
 * [122] Best Time to Buy and Sell Stock II
 */

// @lc code=start
function maxProfit(prices: number[]): number {
  // 每天都能买卖
  // 最多只能同时持股1只
  // 同一天可以先买后卖
  // 可以多次买卖

  // 我们将prices分成多段，分别计算几段时间的maxProfit叠加起来就是最后获取到的最大利润
  // maxProfit(0,i) + maxProfit(i, j) + maxProfit(j,n)
  // 要想
  // 求maxProfit(0,n):   maxProfit(0,n-1) + maxProfit(n-1, n)  // 2个maxProfit
  // 求maxProfit(0,n-1): maxProfit(0,n-2) + maxProfit(n-2, n-1) + maxProfit(n-1,n) // 3个maxProfit
  // 求maxProfit(0,n-2): maxProfit(0,n-3) + maxProfit(n-3, n-2) + maxProfit(n-2,n-1)+ maxProfit(n-1,n) // 4个maxProfit
  // 求maxProfit(0,n-3): maxProfit(0,n-4) + [maxProfit(n-4,n-3) + maxProfit(n-3,n-2) + maxProfit(n-2,n-1) + maxProfit(n-1,n)] // 5个maxProfit
  // 求maxProfit(0, i): maxProfit(0, i-1) + [maxProfit(i-1, i-2) + maxProfit(i-2, i-3) + .... + maxProfit(n-1, n)] // 其中i -1 >=0;
  // 其中maxProfit代表(i-1, i)时间段的最大值

  let max = 0;

  for (let i = prices.length - 1; i >= 0; i--) {
    max += _maxProfit(i - 1, i, prices);
  }

  return max;
};

function _maxProfit(i: number, j: number, prices: number[]) {
  return prices[j] - prices[i] > 0 ? prices[j] - prices[i] : 0;
}
// @lc code=end

export const best_time_to_buy_and_sell_stock_ii = maxProfit;
