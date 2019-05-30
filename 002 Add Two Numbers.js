/*You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.

Example:

Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
Output: 7 -> 0 -> 8
Explanation: 342 + 465 = 807.*/

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

var addTwoNumbers = function(l1, l2) {
	let len = 0;
	this.carry = 0;
	let out = [];
	let l3 = new ListNode(0);
	let addTwoNumbersSub = function(l1, l2, l3) {
		// if(l1.val !== null|| l2.val !== null){
			let total = l1.val + l2.val;
            let currentBit;
			if(this.carry){
                console.log(this.carry);
                console.log(total);
                let test = total + this.carry;		// need to assign to a new variable
                console.log(test);
				this.carry = Math.floor(total / 10);
				// currentBit = (total + this.carry)  % 10;    // not assign
				currentBit = test  % 10;
			}else{
				this.carry = Math.floor(total / 10);
				currentBit = (total)  % 10;
			}
			l3.val = currentBit;
			l3.next = new ListNode(0);
			if(l1.next === null || l2.next === null){
				l3.next = null;
				return l3;
			}
			addTwoNumbersSub(l1.next, l2.next, l3.next);
	}
    
    addTwoNumbersSub(l1, l2, l3);
};

var addTwoNumbers = function(l1, l2) {
    var List = new ListNode(0);
    var head = List;
    var sum = 0;
    var carry = 0;

    while(l1!==null||l2!==null||sum>0){

        if(l1!==null){
            sum = sum + l1.val;
            l1 = l1.next;
        }
        if(l2!==null){
            sum = sum + l2.val;
            l2 = l2.next;
        }
        if(sum>=10){
            carry = 1;
            sum = sum - 10;
        }

        head.next = new ListNode(sum);
        head = head.next;

        sum = carry;
        carry = 0;

    }

    return List.next;
};