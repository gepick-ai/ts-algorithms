/*
 * @lc app=leetcode id=236 lang=typescript
 *
 * [236] Lowest Common Ancestor of a Binary Tree
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

function lowestCommonAncestor(root: TreeNode | null, p: TreeNode | null, q: TreeNode | null): TreeNode | null {
   
  function dfs(node: TreeNode | null): TreeNode | null {
      if (!node || node === p || node === q) {
          return node;
      }

      const l = dfs(node.left);
      const r = dfs(node.right);

      return l && r ? node : (l ?? r);
  }

  return dfs(root)
};
// #endregion code

// @lc code=end

/**
 * {@include ../../../../../../.typedoc/leetcode/236.二叉树的最近公共祖先/problem.md}
 *
 * @group 二叉树
 * @description {@include ../../../../../../.typedoc/leetcode/236.二叉树的最近公共祖先/description.md}
 * {@includeCode ./lowest-common-ancestor-of-a-binary-tree.ts#code}
 *
 * @summary {@include ../../../../../../.typedoc/leetcode/236.二叉树的最近公共祖先/summary.md}
 */
export const lowest_common_ancestor_of_a_binary_tree = lowestCommonAncestor;
