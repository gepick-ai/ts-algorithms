/*
 * @lc app=leetcode id=114 lang=typescript
 *
 * [114] Flatten Binary Tree to Linked List
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

/**
 * Do not return anything, modify root in-place instead.
 */
function flatten(root: TreeNode | null): void {
  if (!root) {
    return;
  }

  let cur = new TreeNode(-1);

  function dfs(node: TreeNode | null) {
    if (!node) {
      return;
    }

    const l = node.left;
    const r = node.right;

    cur.right = node;
    node.left = null;
    cur = node;

    dfs(l);
    dfs(r);
  }

  dfs(root);

  root = cur.right;
};
// #endregion code

// @lc code=end

/**
 * {@include ../../../../../../.typedoc/leetcode/114.二叉树展开为链表/problem.md}
 *
 * @description {@include ../../../../../../.typedoc/leetcode/114.二叉树展开为链表/description.md}
 * {@includeCode ./flatten-binary-tree-to-linked-list.ts#code}
 *
 * @group 二叉树
 * @summary {@include ../../../../../../.typedoc/leetcode/114.二叉树展开为链表/summary.md}
 */
export const flatten_binary_tree_to_linked_list = flatten;
