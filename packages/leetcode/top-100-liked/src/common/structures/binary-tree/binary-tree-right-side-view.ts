/*
 * @lc app=leetcode id=199 lang=typescript
 *
 * [199] Binary Tree Right Side View
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

function rightSideView(root: TreeNode | null): number[] {
  const queue: TreeNode[] = [];
  const ans: number[] = [];

  if (!root) {
    return ans;
  }

  queue.push(root);

  while (queue.length > 0) {
    // 当前层的节点个数
    let curLevelSize = queue.length;

    while (curLevelSize > 0) {
      const root = queue.shift()!;

      // 说明当前的root是本层最右的节点，应该收集答案了
      if (--curLevelSize === 0) {
        ans.push(root.val);
      }

      if (root.left) {
        queue.push(root.left);
      }

      if (root.right) {
        queue.push(root.right);
      }
    }
  }

  return ans;
};
// @lc code=end

export const binary_tree_right_side_view = rightSideView;
