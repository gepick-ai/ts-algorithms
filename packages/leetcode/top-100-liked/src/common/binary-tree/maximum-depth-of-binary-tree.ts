/*
 * @lc app=leetcode id=104 lang=typescript
 *
 * [104] Maximum Depth of Binary Tree
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

function maxDepth(root: TreeNode | null): number {
  // 整个二叉树的最大深度为根1 + Math.max(maxDepth(left), maxDepth(right))

  if (!root) {
    return 0;
  }

  return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));
};
// @lc code=end

export const maximum_depth_of_binary_tree = maxDepth;
