/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
 var hasCycle = function(head) {
    
    var fastPtr = new ListNode()
    fastPtr = head
    
    while(fastPtr && fastPtr.next) {
        head = head.next
        fastPtr = fastPtr.next.next
        if (head == fastPtr) {
            return true
        }
        
    }
    return false
    
    
};