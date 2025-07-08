/*
 * @lc app=leetcode id=199 lang=typescript
 *
 * [199] Binary Tree Right Side View
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

function rightSideView(root: TreeNode | null): number[] {
  const ans: number[] = [];
  const queue: TreeNode[] = [];

  if (root) {
    queue.push(root);
  }

  while (queue.length > 0) {
    const n = queue.length;

    for (let i = 0; i < n; i++) {
      const node = queue.shift()!;

      if (i === n - 1) {
        ans.push(node.val);
      }

      node.left && queue.push(node.left);
      node.right && queue.push(node.right);
    }
  }

  return ans;
};
// #endregion code

// @lc code=end

/**
 * {@include ../../../../../../.typedoc/leetcode/199.二叉树的右视图/problem.md}
 *
 * @description {@include ../../../../../../.typedoc/leetcode/199.二叉树的右视图/description.md}
 * {@includeCode ./binary-tree-right-side-view.ts#code}
 *
 * @group 二叉树
 * @summary {@include ../../../../../../.typedoc/leetcode/199.二叉树的右视图/summary.md}
 */
export const binary_tree_right_side_view = rightSideView;
