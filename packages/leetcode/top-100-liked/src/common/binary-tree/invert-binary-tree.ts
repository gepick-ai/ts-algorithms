/*
 * @lc app=leetcode id=226 lang=typescript
 *
 * [226] Invert Binary Tree
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

function invertTree(root: TreeNode | null): TreeNode | null {
  function dfs(node: TreeNode | null) {
    if (!node) {
      return null;
    }

    const left = dfs(node.left);
    const right = dfs(node.right);

    node.left = right;
    node.right = left;

    return node;
  }

  return dfs(root);
};

// #endregion code

// @lc code=end

/**
 * {@include ../../../../../../.typedoc/leetcode/226.翻转二叉树/problem.md}
 *
 * @description {@include ../../../../../../.typedoc/leetcode/226.翻转二叉树/description.md}
 * {@includeCode ./invert-binary-tree.ts#code}
 *
 * @group 二叉树
 * @summary {@include ../../../../../../.typedoc/leetcode/226.翻转二叉树/summary.md}
 */
export const invert_binary_tree = invertTree;
