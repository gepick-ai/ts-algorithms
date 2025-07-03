/*
 * @lc app=leetcode id=105 lang=typescript
 *
 * [105] Construct Binary Tree from Preorder and Inorder Traversal
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

function buildTree(preorder: number[], inorder: number[]): TreeNode | null {
  return _buildTree(preorder, inorder, 0, 0, inorder.length - 1);
}

function _buildTree(
  preorder: number[],
  inorder: number[],
  preStart: number, // 追踪 preorder 的当前位置
  inStart: number,
  inEnd: number,
): TreeNode | null {
  if (preStart >= preorder.length || inStart > inEnd) {
    return null;
  }

  const rootVal = preorder[preStart]; // 使用索引而不是 shift
  const root = new TreeNode(rootVal);
  const rootInLoc = inorder.findIndex(val => val === rootVal)!;

  root.left = _buildTree(preorder, inorder, preStart + 1, inStart, rootInLoc - 1);
  root.right = _buildTree(preorder, inorder, preStart + (rootInLoc - inStart) + 1, rootInLoc + 1, inEnd);

  return root;
}

// @lc code=end

/**
 * {@include ../../../../../../.typedoc/leetcode/105.从前序与中序遍历序列构造二叉树/problem.md}
 *
 * @description
 * 通过前序遍历和中序遍历构建二叉树，关键点在于通过不断改变追踪索引，确定新子树的前序遍历和后序遍历的结果。
 * 如果每一层都拿根子树的前序遍历结果，那么就无法确定新子树的根节点。
 * 很容易错的地方在于正确处理了中序遍历的索引，但是没处理前序遍历的索引。理所当然认为不断shift preorder的头元素就是新子树的根。这是不对的。
 * 左右子树的前序遍历节点范围是需要重新计算的。
 *
 * 左子树的起始位置 preStart + 1：因为在前序遍历中，根节点后面紧跟着的就是左子树的根节点，所以左子树的起始位置就是当前根节点位置 + 1。
 * 右子树的起始位置 preStart + (rootInLoc - inStart) + 1：rootInLoc - inStart 表示左子树中有多少个节点。因为前序遍历是：根节点 + 左子树 + 右子树，所以右子树的起始位置 = 根节点位置 + 左子树节点数 + 1。
 *
 * @group 二叉树
 */
export const construct_binary_tree_from_preorder_and_inorder_traversal = buildTree;
