/*
 * @lc app=leetcode id=98 lang=typescript
 *
 * [98] Validate Binary Search Tree
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

function isValidBST(root: TreeNode | null): boolean {
  let pre = -Infinity;

  function dfs(node: TreeNode | null): boolean {
    if (!node) {
      return true;
    }

    const l = dfs(node.left);

    if (pre >= node.val) {
      return false;
    }
    pre = node.val;

    const r = dfs(node.right);

    return l && r;
  }

  return dfs(root);
};
// #endregion code

// @lc code=end
/**
 * {@include ../../../../../../.typedoc/leetcode/98.验证二叉搜索树/problem.md}
 *
 * @description {@include ../../../../../../.typedoc/leetcode/98.验证二叉搜索树/description.md}
 * {@includeCode ./validate-binary-search-tree.ts#code}
 *
 * @group 二叉树
 * @summary {@include ../../../../../../.typedoc/leetcode/98.验证二叉搜索树/summary.md}
 */
export const validate_binary_search_tree = isValidBST;
