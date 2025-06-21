/*
 * @lc app=leetcode id=102 lang=typescript
 *
 * [102] Binary Tree Level Order Traversal
 */

import { TreeNode } from "./types";

// @lc code=start
/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function levelOrder(root: TreeNode | null): number[][] {
  let queue: TreeNode[] = [];
  let nextLevelNodes: TreeNode[] = [];
  let levelAns: number[] = [];
  let ans: number[][] = [];

  if (root) {
    queue.push(root);
  }

  while (queue.length > 0) {
    const node = queue.shift()!;

    levelAns.push(node.val);

    if (node.left) {
      nextLevelNodes.push(node.left);
    }

    if (node.right) {
      nextLevelNodes.push(node.right);
    }

    if (queue.length === 0) {
      queue.push(...nextLevelNodes);
      ans.push(levelAns);
      levelAns = [];
      nextLevelNodes = [];
    }
  }

  return ans;
};
// @lc code=end

/**
 * @category 二叉树
 */
export const binary_tree_level_order_traversal = levelOrder;
