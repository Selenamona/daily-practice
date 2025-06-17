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
