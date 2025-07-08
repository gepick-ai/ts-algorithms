/*
 * @lc app=leetcode id=102 lang=typescript
 *
 * [102] Binary Tree Level Order Traversal
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

function levelOrder(root: TreeNode | null): number[][] {
  const ans: number[][] = [];
  const queue: TreeNode[] = [];

  if (root) {
    queue.push(root);
  }

  while (queue.length > 0) {
    const n = queue.length;
    const path: number[] = [];

    for (let i = 0; i < n; i++) {
      const node = queue.shift()!;
      path.push(node.val);

      node.left && queue.push(node.left);
      node.right && queue.push(node.right);
    }

    ans.push([...path]);
  }

  return ans;
};

// #endregion code

// @lc code=end

/**
 * {@include ../../../../../../.typedoc/leetcode/102.二叉树的层序遍历/problem.md}
 *
 * @description {@include ../../../../../../.typedoc/leetcode/102.二叉树的层序遍历/description.md}
 * {@includeCode ./binary-tree-level-order-traversal.ts#code}
 *
 * @group 二叉树
 * @summary {@include ../../../../../../.typedoc/leetcode/102.二叉树的层序遍历/summary.md}
 */
export const binary_tree_level_order_traversal = levelOrder;
