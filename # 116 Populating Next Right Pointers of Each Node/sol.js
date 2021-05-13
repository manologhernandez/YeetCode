/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
 var connect = function(root) {
    
    let ret = []
    if (!root){
        return null
    }
    
    //Level order traversal (BFS)
    
    let q = []
    q.push(root)
    while(q.length > 0) {
        let size = q.length
        let currLevel = []
        let currNode = q.shift()
        
        if(currNode.left != null) {
            q.push(currNode.left)
        }
        if(currNode.right != null) {
            q.push(currNode.right)
        }
        
        for (let i = 1; i < size; i ++) {
            let nextNode = q.shift()
            currNode.next = nextNode
            currNode = currNode.next
            if(currNode.left != null) {
                q.push(currNode.left)
            }
            if(currNode.right != null) {
                q.push(currNode.right)
            }
        }
        
    }
    
    return root
    
};