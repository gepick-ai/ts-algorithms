/*
 * @lc app=leetcode id=101 lang=typescript
 *
 * [101] Symmetric Tree
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

function isSymmetric(root: TreeNode | null): boolean {
  // 判断一颗二叉树轴对称就看它的所有子树的左右子树是否轴对称，如果是那么整棵二叉树就轴对称
  function dfs(n1: TreeNode | null, n2: TreeNode | null): boolean {
    if (!n1 && !n2) {
      return true;
    }

    if (!n1 || !n2) {
      return false;
    }

    return n1.val === n2.val && dfs(n1.left, n2.right) && dfs(n1.right, n2.left);
  }

  return !!root && dfs(root.left, root.right);
};
// #endregion code

// @lc code=end

/**
 * {@include ../../../../../../.typedoc/leetcode/101.对称二叉树/problem.md}
 *
 * @description {@include ../../../../../../.typedoc/leetcode/101.对称二叉树/description.md}
 * {@includeCode ./symmetric-tree.ts#code}
 *
 * @group 二叉树
 * @summary {@include ../../../../../../.typedoc/leetcode/101.对称二叉树/summary.md}
 */
export const symmetric_tree = isSymmetric;
