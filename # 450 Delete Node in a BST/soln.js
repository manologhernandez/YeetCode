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
 * @param {number} key
 * @return {TreeNode}
 */
 var deleteNode = function(root, key) {
    
    function findSmallestRight(root){
        while(root.left!= null) {
            root = root.left
        }
        return root
    }
    
    
    if (!root) {
        console.log("hello")
        return root
    }

    if(root.val == key) { //found it

        // 4 cases
        // 1: leaf
        // 2,3: one subtree
        // 4: has two subtrees

        if(root.left == null && root.right == null) { // is a leaf node
            console.log("hello")
            return null
        }else if (root.left != null && root.right == null){ // has left subtree
            return root.left
        }else if (root.left == null && root.right != null){ // has right subtree
            return root.right
        }else{ // has both subtrees
            console.log("hello")
            let smallestRight = findSmallestRight(root.right)
            console.log(smallestRight.val)
            let newNode = new TreeNode(smallestRight.val)
            
            deleteNode(root, smallestRight.val)
            if (root.left && root.left.val != newNode.val){
                newNode.left = root.left
            }else{
                newNode.left = smallestRight.left
            }
            if (root.right && root.right.val != newNode.val){
                newNode.right = root.right
            }else{
                newNode.right = smallestRight.right
            }
            return newNode
        }

    }else if(root.val < key) { // go right
        root.right = deleteNode(root.right, key)
    }else { // go left
        root.left = deleteNode(root.left, key)
    }

    return root

    
};