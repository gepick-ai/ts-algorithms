/*
 * @lc app=leetcode id=105 lang=typescript
 *
 * [105] Construct Binary Tree from Preorder and Inorder Traversal
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

function buildTree(preorder: number[], inorder: number[]): TreeNode | null {
  const valToIdx = new Map<number, number>(inorder.map((v, i) => [v, i]));

  // 前序遍历序列的第一个节点是当前子树的根
  // 中序遍历序列可以根据这个节点划分成左右两部分，对应的就是当前子树的左右子树
  // 根据中序遍历划分子树节点个数
  // 当前操作：根据描述寻找当前子树的根
  // 下一个子问题：将preorder缩小为对应子树的preorder，inorder为对应子树的inorder

  function dfs(preL: number, inL: number, inR: number): TreeNode | null {
    if (preL >= preorder.length || inL > inR) {
      return null;
    }

    const val = preorder[preL];
    const mid = valToIdx.get(val)!;
    const lSize = mid - inL;

    const l = dfs(preL + 1, inL, mid - 1);
    const r = dfs(preL + lSize + 1, mid + 1, inR);

    return new TreeNode(val, l, r);
  }

  return dfs(0, 0, inorder.length - 1);
};
// #endregion code

// @lc code=end

/**
 * {@include ../../../../../../.typedoc/leetcode/105.从前序与中序遍历序列构造二叉树/problem.md}
 *
 * @description
 * {@include ../../../../../../.typedoc/leetcode/105.从前序与中序遍历序列构造二叉树/description.md}
 * {@includeCode ./construct-binary-tree-from-preorder-and-inorder-traversal.ts#code}
 *
 * @group 二叉树
 * @summary
 * {@include ../../../../../../.typedoc/leetcode/105.从前序与中序遍历序列构造二叉树/summary.md}
 *
 */
export const construct_binary_tree_from_preorder_and_inorder_traversal = buildTree;
