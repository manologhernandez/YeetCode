/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
 var minDepth = function(root) {
    // min depth = min of left subtree or right subtree
    
    if (!root) {
        return 0
    }
    
    if (root.left == null && root.right == null) { // is a leaf
        return 1
    }
    
    let leftDepth = 1000000, rightDepth = 1000000
    if (root.left) {
        leftDepth = 1 + minDepth(root.left)
    }
    if (root.right) {
        rightDepth = 1 + minDepth(root.right)
    }

    return Math.min(leftDepth, rightDepth)
};