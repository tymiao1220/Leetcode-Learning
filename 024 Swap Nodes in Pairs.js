/*
Given a linked list, swap every two adjacent nodes and return its head.

You may not modify the values in the list's nodes, only nodes itself may be changed.

 

Example:

Given 1->2->3->4, you should return the list as 2->1->4->3.
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
 * @return {ListNode}
 */

/*
  1st: draw node link and play with it.

  Node A ---X--->  Node B
  1. assign new head (tmp = Node B) point to Node B : tmp ----> Node B:['=' can be treated as point to]
  2. Node A needs a new pointed reference (Node A.next = null/others) : Node A ----> null
  3. Node B pointer to Node A (tmp.next/Node B.next = Node A) : Node B ----> Node A ----> null

  2nd: Nested function
  1. think var last next, in this example, var right node.
  2. think function has already returned desired value.
  (A --> B --> C --> D --> E --> F)
  Think how to do with A, B and assume rest already completed (D --> C --> F --> E) by nested function
*/
var swapPairs = function(head) {

    if (head === null || head.next === null) {
      return head;
    }
    let sec = head.next;
    let n = swapPairs(sec.next);
    head.next = n;
    sec.next = head;
    return sec;
};


// Optimise
var swapPairs = function(head) {
    if (!head || !head.next ) {
      return head;
    }
    let sec = head.next;
    head.next = swapPairs(sec.next);
    sec.next = head;
    return sec;

}