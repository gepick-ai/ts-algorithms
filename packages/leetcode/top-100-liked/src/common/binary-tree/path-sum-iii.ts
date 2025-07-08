/*
 * @lc app=leetcode id=437 lang=typescript
 *
 * [437] Path Sum III
 */

import { TreeNode } from "./types";

// @lc code=start

// #region code
/**
 * Definition for a binary tree node.
 * class TreeNode {
 * val: number
 * left: TreeNode | null
 * right: TreeNode | null
 * constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 * this.val = (val===undefined ? 0 : val)
 * this.left = (left===undefined ? null : left)
 * this.right = (right===undefined ? null : right)
 * }
 * }
 */

// 实现1
function pathSum(root: TreeNode | null, targetSum: number): number {
  let ans = 0;
  let pre = 0;
  const preToCnt = new Map<number, number>();
  preToCnt.set(0, 1);

  function dfs(node: TreeNode | null) {
    if (!node) {
      return;
    }

    pre += node.val;

    const pre1 = pre - targetSum;
    const cnt = preToCnt.get(pre1) ?? 0;

    ans += cnt;
    preToCnt.set(pre, (preToCnt.get(pre) ?? 0) + 1);

    dfs(node.left);
    dfs(node.right);

    preToCnt.set(pre, (preToCnt.get(pre) ?? 0) - 1);
    pre -= node.val;
  }

  dfs(root);

  return ans;
};

// 实现2
function pathSum1(root: TreeNode | null, targetSum: number): number {
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

// #endregion code

// @lc code=end

/**
 * {@include ../../../../../../.typedoc/leetcode/437.路径总和III/problem.md}
 *
 * @description {@include ../../../../../../.typedoc/leetcode/437.路径总和III/description.md}
 * {@includeCode ./path-sum-iii.ts#code}
 *
 * @group 二叉树
 * @summary {@include ../../../../../../.typedoc/leetcode/437.路径总和III/summary.md}
 */
export const path_sum_iii = pathSum;
