/*
 * @lc app=leetcode id=230 lang=typescript
 *
 * [230] Kth Smallest Element in a BST
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

function kthSmallest(root: TreeNode | null, k: number): number {
  let ans = -Infinity;
  
  function dfs(node: TreeNode | null) {
    if (!node) {
      return;
    }

    dfs(node.left);

    if (k > 0) {
      ans = Math.max(ans, node.val);
      k--;
    }

    dfs(node.right);
  }

  dfs(root);

  return ans;
};
// #endregion code
// @lc code=end

/**
 * {@include ../../../../../../.typedoc/leetcode/230.二叉搜索树中第K小的元素/problem.md}
 *
 * @description {@include ../../../../../../.typedoc/leetcode/230.二叉搜索树中第K小的元素/description.md}
 * {@includeCode ./kth-smallest-element-in-a-bst.ts#code}
 *
 * @group 二叉树
 * @summary {@include ../../../../../../.typedoc/leetcode/230.二叉搜索树中第K小的元素/summary.md}
 */
export const kth_smallest_element_in_a_bst = kthSmallest;
