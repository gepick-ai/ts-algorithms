/*
 * @lc app=leetcode id=98 lang=typescript
 *
 * [98] Validate Binary Search Tree
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

function isValidBST(root: TreeNode | null): boolean {
  let pre = -Infinity;

  function _isValidBST(root: TreeNode | null): boolean {
    if (!root) {
      return true;
    }

    if (!_isValidBST(root.left)) {
      return false;
    }

    if (pre >= root.val) {
      return false;
    }

    pre = root.val;

    return _isValidBST(root.right);
  };

  return _isValidBST(root);
}
// @lc code=end

// 二叉搜索树要求：
// 左子树的所有节点值都小于根节点
// 右子树的所有节点值都大于根节点

/**
 * 利用二叉搜索树的中序遍历结果是升序的特性，来判断是否是二叉搜索树。
 * 中序遍历的顺序是：左根右。
 * 所以前一个节点值>=当前节点值，则不是二叉搜索树。
 *
 * @category 二叉树
 */
export const validate_binary_search_tree = isValidBST;
