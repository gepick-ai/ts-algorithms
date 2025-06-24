/*
 * @lc app=leetcode id=124 lang=typescript
 *
 * [124] Binary Tree Maximum Path Sum
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

function maxPathSum(root: TreeNode | null): number {
  let ans = -Infinity;

  // 对于当前节点node，该节点的处的max值可能：
  // 1、当前节点和两侧节点都要
  // 2、当前节点和左右当中一侧的节点
  // 3. 如果两侧贡献值都是负数，越加越小，那么直接不要两侧，也就是取0
  function dfs(node: TreeNode | null): number {
    if (!node) {
      return 0;
    }

    // 有可能左右贡献都是负数，此时直接取0
    const left = Math.max(dfs(node.left), 0);
    const right = Math.max(dfs(node.right), 0);

    // 左链最大节点之和 + 右链最大节点之和 + 本层节点 = 最大路径之和
    ans = Math.max(ans, left + right + node.val);

    // 返回左右链的最大节点和 + 自身的节点值 = 当前节点出发到左或者右叶子节点的链的最大节点和
    return Math.max(left, right) + node.val;
  }

  dfs(root);

  return ans;
};
// @lc code=end

/**
 * @category 二叉树
 */
export const binary_tree_maximum_path_sum = maxPathSum;
