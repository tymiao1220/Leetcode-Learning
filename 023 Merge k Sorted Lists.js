/*
Merge k sorted linked lists and return it as one sorted list. Analyze and describe its complexity.

Example:

Input:
[
  1->4->5,
  1->3->4,
  2->6
]
Output: 1->1->2->3->4->4->5->6
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */

/*
Heap of memory
*/
var mergeKLists = function(lists) {

    if(!lists.length) return null;

    function mergeTwo(l1, l2){

      let Output = new ListNode(0),
          Head = Output;
      while(l1 && l2){
        if(l1.val < l2.val){
          Head.next = l1;
          l1 = l1.next;
        }else{
          Head.next = l2;
          l2 = l2.next;
        }
        Head = Head.next;
      }
      Head.next = l1 || l2;
      return Output.next;
    }


    /*
      use given arr to solve result to save memory, shift() will return first one element of array 
      and will remove arr's first element at the same time. 
    */
    while (lists.length > 1) {
        let a = lists.shift(); // the head will contains the "less" length list
        let b = lists.shift(); // acturally, we can use the linkedlist to replace it, the while loop will be the while( list.header.next !== null || lists.length > 0)
        const h = mergeTwo(a, b);
        lists.push(h);
    }
    return lists[0];
};