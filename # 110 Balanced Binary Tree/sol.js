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
 * @return {boolean}
 */
 function height(root) {
    if (!root) {
        return 0
    }
    
    return Math.max(height(root.left), height(root.right)) + 1 
}
var isBalanced = function(root) {
if(!root){
    return true
}

let leftHeight = height(root.left)
let rightHeight = height(root.right)

return Math.abs(leftHeight - rightHeight) <= 1 && isBalanced(root.left) && isBalanced(root.right) 

};