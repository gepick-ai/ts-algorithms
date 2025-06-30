/*
 * @lc app=leetcode id=437 lang=typescript
 *
 * [437] Path Sum III
 */

import { TreeNode } from "./types";

// @lc code=start
/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function pathSum(root: TreeNode | null, targetSum: number): number {
  // 这道题给了“路径”限制：从上到下，也就是父到子的方向
  // DFS 遍历这棵树，遍历到节点 node 时，假设 node 是路径的终点，那么有多少个起点，满足起点到终点node的路径总和恰好等于targetSum？
  let k = targetSum;
  let pre = 0;
  let ans = 0;
  const map = new Map<number, number>();
  map.set(0, 1);

  function dfs(node: TreeNode | null, pre: number) {
    if (!node) {
      return;
    }

    pre += node.val;
    const x = pre - k;
    const count = map.get(x);

    ans += count ?? 0;
    map.set(pre, (map.get(pre) ?? 0) + 1);

    dfs(node.left, pre);
    dfs(node.right, pre);

    map.set(pre, map.get(pre)! - 1);
  }

  dfs(root, pre);

  return ans;
};

// @lc code=end

/**
 * {@include ../../../../../../.typedoc/problems/437.路径总和III.md}
 *
 * 
 * @summary 560.和为K的连续子数组解法一致。将每个遍历到的node作为终点，统计有多少个起点到终点node的路径总和恰好等于targetSum。再转化成前缀和问题。
 *
 * @group 二叉树
 */
export const path_sum_iii = pathSum;
