/*
 * @lc app=leetcode id=94 lang=typescript
 *
 * [94] Binary Tree Inorder Traversal
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

function inorderTraversal(root: TreeNode | null): number[] {
  const ans: number[] = [];

  function _inorderTraversal(root: TreeNode | null) {
    if (!root) {
      return;
    }

    _inorderTraversal(root.left);
    ans.push(root.val);

    _inorderTraversal(root.right);
  }

  _inorderTraversal(root);

  return ans;
};
// @lc code=end

export const binary_tree_inorder_traversal = inorderTraversal;
