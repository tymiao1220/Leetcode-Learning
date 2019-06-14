/*
Merge two sorted linked lists and return it as a new list. The new list should be made by splicing together the nodes of the first two lists.

Example:

Input: 1->2->4, 1->3->4
Output: 1->1->2->3->4->4
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {

  let Merge = new ListNode(0);
  step = Merge;
  while(l1 !== null || l2 !== null){
    step.val = l1.val;
    step.next = l2;
    l1 = l1.next;
    l2 = l2.next;
    step.next.next = step;
    console.log(step);
  }
  step.next = l1 || l2;
  console.log(Merge);

};


/*
  crt.next = l2 make sure the last crt(=crt.next) is last l2/l1 node instead of null
  When deal with nodelist, make a total and its head and always manipulate its head.next,
  total will update( head = head.next to always update current node and total will keep update)
*/
var mergeTwoLists = function(l1, l2) {
    var mergedHead = { val : -1, next : null },
        crt = mergedHead;
    while(l1 && l2) {
        if(l1.val > l2.val) {
            crt.next = l2;
            l2 = l2.next;
        } else {
            crt.next = l1;
            l1 = l1.next;
        }
        crt = crt.next;
    }
    crt.next = l1 || l2;
    
    return mergedHead.next;
};