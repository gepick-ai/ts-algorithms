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
  let ans = 0;
  // 链：从子树中的叶子节点到当前节点的路径。
  // 整体思路是：遍历每一个节点，然后在每一层计算当前子树的最大链长，然后加上1，形成当前子树的左侧链长和右侧链长，然后更新最大值。
  // dfs表示寻找当前子树的最大链长，返回值为当前子树的最大链长，不包含当前节点和其父节点之间的这条边。
  // 比如一棵树长这样：
  //                 1
  //   dfs(l)+1     / \    dfs(r)+1
  //               2   3
  //              / \   \
  //             4   5   6
  // 对于：
  // 1-2-4 这条链的边长为 2，相当于2-4这条链的边长+1
  // 2-4 这条链的边长为 1
  // 从4出发，边长为0
  // 从空节点出发，边长为-1
  function dfs(node: TreeNode | null): number {
    if (node === null) {
      return -1;
    }

    const lLen = dfs(node.left);
    const rLen = dfs(node.right);

    ans = Math.max(ans, lLen + rLen + 2); // 左子树最大链长+1，就是加上左子树到当前节点的边，右子树最大链长+1，就是加上右子树到当前节点的边。两条链拼成路径，更新最大值

    return Math.max(lLen, rLen) + 1; // 当前子树的左右子树最大链长加上当前节点到子树的边就是当前子树的最大链长
  }

  dfs(root);

  return ans;
};
// @lc code=end

/**
 * {@include ../../../../../../.typedoc/leetcode/543.二叉树的直径/problem.md}
 *
 * @group 二叉树
 */
export const diameter_of_binary_tree = diameterOfBinaryTree;
