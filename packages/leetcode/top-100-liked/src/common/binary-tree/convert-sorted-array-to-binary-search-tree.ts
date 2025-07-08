/*
 * @lc app=leetcode id=108 lang=typescript
 *
 * [108] Convert Sorted Array to Binary Search Tree
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
function sortedArrayToBST(nums: number[]): TreeNode | null {
  function dfs(l: number, r: number): TreeNode | null {
    if (l > r) {
      return null;
    }

    const m = Math.floor((l + r) / 2);

    return new TreeNode(nums[m], dfs(l, m - 1), dfs(m + 1, r));
  }

  return dfs(0, nums.length - 1);
};

// #endregion code

// @lc code=end

/**
 * {@include ../../../../../../.typedoc/leetcode/108.将有序数组转换为二叉搜索树/problem.md}
 *
 * @description {@include ../../../../../../.typedoc/leetcode/108.将有序数组转换为二叉搜索树/description.md}
 * {@includeCode ./convert-sorted-array-to-binary-search-tree.ts#code}
 *
 * @group 二叉树
 * @summary {@include ../../../../../../.typedoc/leetcode/108.将有序数组转换为二叉搜索树/summary.md}
 */
export const convert_sorted_array_to_binary_search_tree = sortedArrayToBST;
