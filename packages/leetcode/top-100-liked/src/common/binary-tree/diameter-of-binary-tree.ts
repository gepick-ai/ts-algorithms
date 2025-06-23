/*
 * @lc app=leetcode id=543 lang=typescript
 *
 * [543] Diameter of Binary Tree
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

function diameterOfBinaryTree(root: TreeNode | null): number {
  let ans = 0;

  function dfs(node: TreeNode | null): number {
    if (node === null) {
      return -1; // 对于叶子来说，链长就是 -1+1=0
    }

    const lLen = dfs(node.left) + 1; // 左子树最大链长+1
    const rLen = dfs(node.right) + 1; // 右子树最大链长+1

    ans = Math.max(ans, lLen + rLen); // 两条链拼成路径

    return Math.max(lLen, rLen); // 当前子树最大链长
  }

  dfs(root);

  return ans;
};
// @lc code=end

/**
 * @category 二叉树
 */
export const diameter_of_binary_tree = diameterOfBinaryTree;
