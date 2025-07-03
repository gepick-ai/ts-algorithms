/*
 * @lc app=leetcode id=230 lang=typescript
 *
 * [230] Kth Smallest Element in a BST
 */

import { TreeNode } from "./types";

// @lc code=start
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

function kthSmallest(root: TreeNode | null, k: number): number {
  // 二叉搜索树的中序遍历就是一个升序的数组，直接找数组当中的k-1位置就是整个树第K小的元素。
  const orderArr: number[] = [];

  _inorderTraverse(root, orderArr);

  return orderArr[k - 1];
};

function _inorderTraverse(root: TreeNode | null, orderArr: number[]) {
  if (!root) {
    return;
  }

  _inorderTraverse(root.left, orderArr);
  orderArr.push(root.val);
  _inorderTraverse(root.right, orderArr);
}
// @lc code=end

/**
 * {@include ../../../../../../.typedoc/leetcode/230.二叉搜索树中第K小的元素/problem.md}
 *
 * @group 二叉树
 */
export const kth_smallest_element_in_a_bst = kthSmallest;
