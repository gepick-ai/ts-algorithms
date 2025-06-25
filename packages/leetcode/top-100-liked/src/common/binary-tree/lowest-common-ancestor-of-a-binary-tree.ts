/*
 * @lc app=leetcode id=236 lang=typescript
 *
 * [236] Lowest Common Ancestor of a Binary Tree
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

function lowestCommonAncestor(root: TreeNode | null, p: TreeNode | null, q: TreeNode | null): TreeNode | null {
  // p、q节点要么在一侧子树中，要么分别在两侧子树中
  // 尝试查左右子树：如果当前root是p、q其中一个，或者root为null，说明找到节点或者必须终止不必查询了
  // 现在获取左右子树返回值left和right，如果left和right都不为空，说明两个查询节点就分别在左右子树当中，那当前root其实就是两个节点最近的共同祖先。原因是p、q已经处于两侧子树，距离最近最近就是两个子树的根，所以无论这种情况p、q是在哪里，最近的共同祖先就是root。
  // 如果left和right其中一个返回值是空，说明p、q一定是在不为空的那一侧的。又由于left和right不为空的那个返回值就是p或者q。这里假设left不为空，且返回值就是p，那么说明right没找到q，说明q一定在以p为root的左子树当中，此时p就是p和q的最近共同祖先。

  if (root === null || root === q || root === p) {
    return root;
  }

  const left = lowestCommonAncestor(root.left, p, q);
  const right = lowestCommonAncestor(root.right, p, q);

  if (left && right) {
    return root;
  }
  else if (left) {
    return left;
  }
  else {
    return right;
  }
};
// @lc code=end

/**
 * @group 二叉树
 */
export const lowest_common_ancestor_of_a_binary_tree = lowestCommonAncestor;
