/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
 var constructMaximumBinaryTree = function(nums) {
    
    if(nums.length == 0){
        return null
    }
    if(nums.length === 1) return new TreeNode(nums[0])
    
    let max = Math.max(...nums)
    let idx = nums.indexOf(max)
    let lSubArr = nums.slice(0,idx)
    let rSubArr = nums.slice(idx+1)
    
    var root = new TreeNode(max)
    root.left = constructMaximumBinaryTree(lSubArr)
    root.right = constructMaximumBinaryTree(rSubArr)
    return root
    
};