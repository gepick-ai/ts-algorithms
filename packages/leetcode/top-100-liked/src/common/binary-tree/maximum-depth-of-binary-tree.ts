/*
 * @lc app=leetcode id=104 lang=typescript
 *
 * [104] Maximum Depth of Binary Tree
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

function maxDepth(root: TreeNode | null): number {
  function dfs(node: TreeNode | null): number {
    if (!node) {
      return 0;
    }

    return 1 + Math.max(dfs(node.left), dfs(node.right));
  }

  return dfs(root);
};
// #endregion code

// @lc code=end

/**
 * {@include ../../../../../../.typedoc/leetcode/104.二叉树的最大深度/problem.md}
 *
 * @description {@include ../../../../../../.typedoc/leetcode/104.二叉树的最大深度/description.md}
 * {@includeCode ./maximum-depth-of-binary-tree.ts#code}
 *
 * @group 二叉树
 * @summary {@include ../../../../../../.typedoc/leetcode/104.二叉树的最大深度/summary.md}
 */
export const maximum_depth_of_binary_tree = maxDepth;
