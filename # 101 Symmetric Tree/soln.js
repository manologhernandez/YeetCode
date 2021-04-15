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
 var isSymmetric = function(root) {
    
    function checkMirror(nodeA, nodeB) {
        if (!nodeA && !nodeB) {
            return true
        }
        if (!nodeA || !nodeB) {
            return false
        }
        
        return (nodeA.val == nodeB.val && checkMirror(nodeA.left, nodeB.right) && checkMirror(nodeA.right, nodeB.left))
    }

    return checkMirror(root, root)
    
};