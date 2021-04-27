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
 function maxDepth(root){
    if (!root){
        return 0
    }
    
    let lDepth = maxDepth(root.left)
    let rDepth = maxDepth(root.right)
    
    return Math.max(lDepth, rDepth) + 1
    
}

function diameter(root){
if (!root){
    return 0
}
let lDepth = maxDepth(root.left)
let rDepth = maxDepth(root.right)

return Math.max(Math.max(diameter(root.left), diameter(root.right)), lDepth+rDepth+1)
}

var diameterOfBinaryTree = function(root) {

// max of either: diameter of left subtree, diameter of right subtree, height of roots left and right subtree

return diameter(root)-1
};