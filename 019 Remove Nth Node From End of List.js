/*
Given a linked list, remove the n-th node from the end of list and return its head.

Example:

Given linked list: 1->2->3->4->5, and n = 2.

After removing the second node from the end, the linked list becomes 1->2->3->5.
Note:

Given n will always be valid.

Follow up:

Could you do this in one pass?
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */

/*
A one pass solution can be done using pointers. Move one pointer fast --> n+1 places forward, 
to maintain a gap of n between the two pointers and then move both at the same speed. 
Finally, when the fast pointer reaches the end, the slow pointer will be n+1 places behind - 
just the right spot for it to be able to skip the next node.

Since the question gives that n is valid, not too many checks have to be put in place. 
Otherwise, this would be necessary.
*/

/*!!!
var tempMyObj = myObj;
In JavaScript objects are passed and assigned by reference (more accurately the value of a reference),
so tempMyObj and myObj are both references to the same object.
!!!*/
var removeNthFromEnd = function(head, n) {
    let start = new ListNode(0);
        start.next = head;
    let left = start.next,
        right = start.next;

    for(let i = 1; i <= n + 1; i++){
      right = right.next
    }
    while(right !== null){
      left = left.next;
      right = right.next;
    }
    left.next = left.next.next;
    return start.next;
};