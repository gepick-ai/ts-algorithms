/*
 * @lc app=leetcode id=108 lang=typescript
 *
 * [108] Convert Sorted Array to Binary Search Tree
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
function sortedArrayToBST(nums: number[]): TreeNode | null {
  // 二叉搜索树的中序遍历的结果就是一个升序的数组。
  // 中序遍历的顺序是：左根右。
  // 分治处理：每次都二分寻找有序数组的根

  return buildTree(nums, 0, nums.length);
};

/**
 * 建树，其中start和end是左闭右开的,[start, end)
 */
function buildTree(nums: number[], start: number, end: number) {
  if (start === end) {
    return null;
  }

  let rootLoc = Math.floor((start + end) / 2);

  const root = new TreeNode(nums[rootLoc]);

  root.left = buildTree(nums, start, rootLoc);
  root.right = buildTree(nums, rootLoc + 1, end);

  return root;
}
// @lc code=end

/**
 * {@include ../../../../../../.typedoc/problems/108.将有序数组转换为二叉搜索树.md}
 *
 * @group 二叉树
 */
export const convert_sorted_array_to_binary_search_tree = sortedArrayToBST;
