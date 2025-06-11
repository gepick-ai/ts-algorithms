/*
 * @lc app=leetcode id=101 lang=typescript
 *
 * [101] Symmetric Tree
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

function isSymmetric(root: TreeNode | null): boolean {
  // 在判断自己的左右子树值一样的情况下：
  // 继续判断自己的左子树的left和右子树的right，以及左子树的right和右子树的left是否相等

  if (!root) {
    return true;
  }

  return _isSymmetric(root.left, root.right);
};

function _isSymmetric(n1: TreeNode | null, n2: TreeNode | null): boolean {
  if (!n1 && !n2) {
    return true;
  }

  if (!n1 || !n2) {
    return false;
  }

  return n1.val === n2.val && _isSymmetric(n1.left, n2.right) && _isSymmetric(n1.right, n2.left);
}
// @lc code=end

export const symmetric_tree = isSymmetric;
