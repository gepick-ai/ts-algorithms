/*
 * @lc app=leetcode id=134 lang=typescript
 *
 * [134] Gas Station
 */

// @lc code=start
function canCompleteCircuit(gas: number[], cost: number[]): number {
  // 到达位i后可以加gas[i]升油，然后从位i出发到下一个位置i+1，要消耗cost[i]升油

  // 要到达下一个目的地i+1，那么（到达i所剩下的油leftGas + 到达i加的油gas[i]）要大于等于去下一个地方要消耗的cos[i]升油才行。

  // 从公路上的每一个位置出发进行尝试
  // 位0出发：leftGaps + gas[0] > cost[0]
  // 可以的话，更新leftGaps：leftGaps = leftGaps + gas[0] - cost[0]
  // 不可以的话，不再继续尝试

  for (let i = 0; i < gas.length; i++) {
    // 从公路上的每一个位置出发进行尝试
    let start = i;
    let leftGas = 0;

    // 如果能够到达下一个位置，不断尝试往下一个位置跑，直到回到start
    while (true) {
      leftGas = leftGas + gas[start] - cost[start];

      // 说明能够跑到下一个位置
      if (leftGas >= 0) {
        // 算出下一个位置
        start = start + 1 === gas.length ? (start + 1) - gas.length : start + 1;
        // 如果下一个位置就是回到i，return i
        if (start === i) {
          return i;
        }
      }
      else {
        break;
      }
    }
  }

  return -1;
};
// @lc code=end

export const gas_station = canCompleteCircuit;
