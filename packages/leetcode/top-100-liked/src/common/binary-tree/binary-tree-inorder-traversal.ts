/*
 * @lc app=leetcode id=94 lang=typescript
 *
 * [94] Binary Tree Inorder Traversal
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

function inorderTraversal(root: TreeNode | null): number[] {
  const ans: number[] = [];

  function dfs(node: TreeNode | null) {
    if (!node) {
      return;
    }

    dfs(node.left);
    ans.push(node.val);
    dfs(node.right);
  }

  dfs(root);

  return ans;
};

// #endregion code

// @lc code=end

/**
 * {@include ../../../../../../.typedoc/leetcode/94.二叉树的中序遍历/problem.md}
 *
 * @description {@include ../../../../../../.typedoc/leetcode/94.二叉树的中序遍历/description.md}
 * {@includeCode ./binary-tree-inorder-traversal.ts#code}
 *
 * @group 二叉树
 * @summary {@include ../../../../../../.typedoc/leetcode/94.二叉树的中序遍历/summary.md}
 */
export const binary_tree_inorder_traversal = inorderTraversal;
