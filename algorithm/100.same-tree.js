/*
 * @lc app=leetcode id=100 lang=javascript
 *
 * [100] Same Tree
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right) 
 * }
 */
function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

// 将 LeetCode 数组转换为二叉树
function buildTree(arr) {
  if (!arr || !arr.length) return null;
  const nodes = arr.map((val) => (val !== null ? new TreeNode(val) : null));
  const root = nodes[0];
  for (let i = 0; i < nodes.length; i++) {
    if (nodes[i]) {
      const leftIndex = 2 * i + 1;
      const rightIndex = 2 * i + 2;
      nodes[i].left = leftIndex < nodes.length ? nodes[leftIndex] : null;
      nodes[i].right = rightIndex < nodes.length ? nodes[rightIndex] : null;
    }
  }
  return root;
}

/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */

var buildTree2 = function (preorder, inorder) {
  if (preorder.length === 1) return new TreeNode(preorder[0]);
  let stack = preorder.slice(0, 2);

  // let root = new TreeNode(preorder[0]);

  return root;
};
console.log(
  // buildTree2(buildTree([3, 9, 20, 15, 7]), buildTree([9, 3, 15, 20, 7]))
  buildTree2([3, 9, 20, 15, 7], [9, 3, 15, 20, 7])
);
