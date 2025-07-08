/*
 * @lc app=leetcode id=543 lang=typescript
 *
 * [543] Diameter of Binary Tree
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

function diameterOfBinaryTree(root: TreeNode | null): number {
  let ans: number = 0;
  function dfs(node: TreeNode | null): number {
    if (!node) {
      return -1;
    }

    const left = dfs(node.left);
    const right = dfs(node.right);

    ans = Math.max(ans, left + right + 2); // 左子树最大链长+1，就是加上左子树到当前节点的边，右子树最大链长+1，就是加上右子树到当前节点的边。两条链拼成路径，更新最大值

    return Math.max(left, right) + 1;// 当前子树的左右子树最大链长加上当前节点到子树的边就是当前子树的最大链长
  }

  dfs(root);

  return ans;
};

// #endregion code
// @lc code=end

/**
 * {@include ../../../../../../.typedoc/leetcode/543.二叉树的直径/problem.md}
 *
 * @description {@include ../../../../../../.typedoc/leetcode/543.二叉树的直径/description.md}
 * {@includeCode ./diameter-of-binary-tree.ts#code}
 *
 * @group 二叉树
 * @summary {@include ../../../../../../.typedoc/leetcode/543.二叉树的直径/summary.md}
 */
export const diameter_of_binary_tree = diameterOfBinaryTree;
