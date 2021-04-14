/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

function append(head, val){
    var node = new ListNode(val)
    while(head.next !== null){
        head = head.next
    }
    head.next = node
}
var mergeTwoLists = function(l1, l2) {

    let head = new ListNode()

    while (true){
        if(!l1){
            break
        }
        if (!l2){
            break
        }
        if (l1.val <= l2.val) {
            append(head, l1.val)
            l1 = l1.next
        }else{
            append(head, l2.val)
            l2 = l2.next
        }
    }
    while(l1!=null){
        append(head,l1.val)
        l1 = l1.next
    }
    while(l2!=null){
        append(head,l2.val)
        l2 = l2.next
    }
    return head.next


};