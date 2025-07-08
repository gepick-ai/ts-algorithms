/*
 * @lc app=leetcode id=124 lang=typescript
 *
 * [124] Binary Tree Maximum Path Sum
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

function maxPathSum(root: TreeNode | null): number {
  let ans = -Infinity;

  function dfs(node: TreeNode | null): number {
    if (!node) {
      return 0;
    }

    const l = dfs(node.left);
    const r = dfs(node.right);

    ans = Math.max(ans, l + r + node.val);

    return Math.max(Math.max(l, r) + node.val, 0);
  }

  dfs(root);

  return ans;
};
// #endregion code

// @lc code=end

/**
 * {@include ../../../../../../.typedoc/leetcode/124.二叉树中的最大路径和/problem.md}
 *
 * @description {@include ../../../../../../.typedoc/leetcode/124.二叉树中的最大路径和/description.md}
 * {@includeCode ./binary-tree-maximum-path-sum.ts#code}
 *
 * @group 二叉树
 * @summary {@include ../../../../../../.typedoc/leetcode/124.二叉树中的最大路径和/summary.md}
 */
export const binary_tree_maximum_path_sum = maxPathSum;
