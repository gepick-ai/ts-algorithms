/*
 * @lc app=leetcode id=114 lang=typescript
 *
 * [114] Flatten Binary Tree to Linked List
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

/**
 Do not return anything, modify root in-place instead.
 */
function flatten(root: TreeNode | null): void {
  const orderArr: TreeNode[] = [];

  _preorderTraverse(root, orderArr);
  for (let i = 0; i < orderArr.length; i++) {
    const node = orderArr[i];

    if (i + 1 < orderArr.length) {
      node.right = orderArr[i + 1];
      node.left = null;
    }
  }
};

function _preorderTraverse(root: TreeNode | null, orderArr: TreeNode[]): void {
  if (!root) {
    return;
  }

  orderArr.push(root);
  _preorderTraverse(root.left, orderArr);
  _preorderTraverse(root.right, orderArr);
}
// @lc code=end

/**
 * @group 二叉树
 */
export const flatten_binary_tree_to_linked_list = flatten;
