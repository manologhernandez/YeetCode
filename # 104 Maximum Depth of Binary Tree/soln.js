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
 var maxDepth = function(root) {
    
    if (!root){
        return 0
    }
    
    var maxDepth = -1
    
    function traverseDown(root, depth) {
        
        //reached a bottom
        if (!root) {
            if (depth > maxDepth) {
                maxDepth = depth
            }
            return
        }
        
        traverseDown(root.left, depth+1)
        traverseDown(root.right, depth+1)
    }
    
    
    traverseDown(root, 0)
    return maxDepth
    
};