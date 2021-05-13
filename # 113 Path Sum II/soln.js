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
 * @param {number} targetSum
 * @return {number[][]}
 */
 var pathSum = function(root, targetSum) {
    let ret = []
    let currPath = []
    function generatePaths(root, targetSum, currPath) {
        
        if(!root){
            currPath.push(-1)
            return
        }
        
        
        currPath.push(root.val)
        
        if(root.left == null && root.right == null && targetSum-root.val == 0){
            ret.push([...currPath])
            return
        }else if (root.left == null && root.right == null && targetSum-root.val != 0){
            return
        }
        
        generatePaths(root.left, targetSum-root.val, currPath)
        currPath.pop()
        generatePaths(root.right, targetSum-root.val, currPath)
        currPath.pop()
        return
        
    }
    generatePaths(root, targetSum, currPath)
    return ret
};